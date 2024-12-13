import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

function extractPlainText(property) {
  // Function to extract plain text from different Notion property types
  if (!property) return "";

  // Handle rich_text type
  if (property.type === "rich_text" && property.rich_text.length > 0) {
    return property.rich_text
      .map((item) => {
        if (item.type === "text") return item.plain_text;
        if (item.type === "mention") return item.plain_text;
        return "";
      })
      .filter((text) => text.trim() !== "")
      .join(" ");
  }

  // Handle title type
  if (property.type === "title" && property.title.length > 0) {
    return property.title.map((item) => item.plain_text).join(" ");
  }

  // Handle other potential types if needed
  return "";
}

const PROTOCOL_PAGE_MAPPING = {
  arbitrum: [
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID1", votingType: "Off-chain Voting" },
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID2", votingType: "On-chain Voting" }
  ],
  optimism: [
    // { id: "NEXT_PUBLIC_NOTION_PAGE_ID3", votingType: "Off-chain Voting" },
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID4", votingType: "On-chain Voting" }
  ],
  uniswap: [
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID5", votingType: "Off-chain Voting" },
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID6", votingType: "On-chain Voting" }
  ],
  ens: [
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID7", votingType: "Off-chain Voting" },
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID8", votingType: "On-chain Voting" }
  ]
};

export async function GET(request) {
  if (!process.env.NOTION_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Notion API key is not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    let selectedProtocol = searchParams.get("protocol")?.toLowerCase(); // Convert to lowercase
    console.log(selectedProtocol);

    // Validate the protocol
    if (selectedProtocol && !PROTOCOL_PAGE_MAPPING[selectedProtocol]) {
      return new Response(
        JSON.stringify({ error: "Invalid protocol specified" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const timestamp = Date.now();

    // Determine which page IDs to use
    let pageIdsToUse = [];

    if (selectedProtocol && PROTOCOL_PAGE_MAPPING[selectedProtocol]) {
      pageIdsToUse = PROTOCOL_PAGE_MAPPING[selectedProtocol].map(
        (item) => process.env[item.id]
      );
    } else {
      pageIdsToUse = [
        ...PROTOCOL_PAGE_MAPPING.arbitrum.map((item) => process.env[item.id]),
        ...PROTOCOL_PAGE_MAPPING.optimism.map((item) => process.env[item.id]),
        ...PROTOCOL_PAGE_MAPPING.uniswap.map((item) => process.env[item.id]),
        ...PROTOCOL_PAGE_MAPPING.ens.map((item) => process.env[item.id])
      ];
    }

    console.log("IdsToUse", pageIdsToUse);

    const headers = {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    };

    // Filter out any undefined page IDs
    const validPageIds = pageIdsToUse.filter((id) => id);
    console.log("validIDs", validPageIds);

    if (validPageIds.length === 0) {
      return new Response(
        JSON.stringify({ error: "No valid Page IDs configured" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Format page IDs and determine voting type based on original index in the full array
    const formattedPageIds = validPageIds.map((id, index) => {
      // Find the protocol and the voting type for this ID
      const protocol = Object.keys(PROTOCOL_PAGE_MAPPING).find(proto => 
        PROTOCOL_PAGE_MAPPING[proto].some(item => process.env[item.id] === id)
      );
    
      const votingType = protocol 
        ? PROTOCOL_PAGE_MAPPING[protocol].find(item => process.env[item.id] === id).votingType
        : (index % 2 === 0 ? "Off-chain Voting" : "On-chain Voting");
    
      return {
        id: id.replace(/-/g, ""),
        votingType
      };
    });

    console.log("formattedIds", formattedPageIds);

    // Fetch database records for all pages
    const databasePromises = formattedPageIds.map(
      async ({ id, votingType }) => {
        const { results } = await notion.databases.query({
          database_id: id,
        });

        console.log(`Debug - Database ${id} (${votingType}):`, {
          resultsCount: results.length,
          firstResult: results[0] // Log the first result if exists
        });

        // Transform each result to extract plain text and add voting type
        return results.map((result) => {
          const simplifiedRecord = {};

          // Iterate through all properties
          Object.entries(result.properties).forEach(([key, value]) => {
            simplifiedRecord[key] = extractPlainText(value);
          });

          // Add voting type to each record
          simplifiedRecord["Type"] = votingType;

          return simplifiedRecord;
        });
      }
    );

    // Fetch all database records
    const allDatabaseRecords = (await Promise.all(databasePromises)).flat();

    // Sort database records
    const sortedRecords = allDatabaseRecords.sort((a, b) => {
      const parseDate = (dateStr) => {
        if (!dateStr) return null;
        const [day, month, year] = dateStr.split("/");
        return new Date(`${year}-${month}-${day}`);
      };

      const dateA = parseDate(a["Start Date"]);
      const dateB = parseDate(b["Start Date"]);

      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;

      return dateB - dateA;
    });

    // console.log(sortedRecords);

    return new Response(
      JSON.stringify({
        success: true,
        data: sortedRecords,
        timestamp,
      }),
      { headers }
    );
  } catch (error) {
    console.error("Notion API Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch Notion data",
        details: error.message,
        code: error.code,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
