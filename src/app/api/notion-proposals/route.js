import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

function extractCellContent(cell) {
  if (!cell || cell.length === 0) return "";
  return cell[0].plain_text || "";
}

async function extractTableData(blocks, label) {
  const monthTables = [];

  for (const block of blocks) {
    if (block.type === "toggle" && block.has_children) {
      const monthMatch = block.toggle.rich_text[0].text.content.match(
        /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/
      );

      if (monthMatch) {
        const monthData = {
          month: monthMatch[1],
          year: monthMatch[2],
          proposals: [],
        };

        const tableBlocks = await getAllBlocksRecursively(block.id);
        const tableBlock = tableBlocks.find((b) => b.type === "table");

        if (tableBlock) {
          const rows = await notion.blocks.children.list({
            block_id: tableBlock.id,
          });

          let headers = [];
          if (rows.results.length > 0) {
            headers = rows.results[0].table_row.cells.map(
              (cell) => extractCellContent(cell) || "unnamed_column"
            );
          }

          for (let i = 1; i < rows.results.length; i++) {
            const row = rows.results[i];
            if (row.type === "table_row") {
              const rowData = {};

              row.table_row.cells.forEach((cell, index) => {
                const headerKey = headers[index] || `column${index}`;
                rowData[headerKey] = extractCellContent(cell);
              });

              // Add the label to the row data
              rowData["Type"] = label;
              monthData.proposals.push(rowData);
            }
          }

          // Sort proposals by Sr. No. in descending order
          monthData.proposals.sort((a, b) => {
            const srNoA = parseInt(a["Sr. No."] || "0", 10);
            const srNoB = parseInt(b["Sr. No."] || "0", 10);
            return srNoB - srNoA; // Descending order
          });
        }

        monthTables.push(monthData);
      }
    }
  }

  return monthTables;
}

async function getAllBlocksRecursively(blockId) {
  const blocks = [];
  let cursor;

  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });

    blocks.push(...results);

    if (!next_cursor) break;
    cursor = next_cursor;
  }

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.has_children) {
      block.children = await getAllBlocksRecursively(block.id);
    }
  }

  return blocks;
}

// Updated combineAndSortMonthlyData function (remains the same as in previous response)
function combineAndSortMonthlyData(monthlyDataArrays) {
  const monthMap = new Map();

  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  monthlyDataArrays.forEach((monthData) => {
    const key = `${monthData.year}-${monthData.month}`;
    if (!monthMap.has(key)) {
      monthMap.set(key, {
        month: monthData.month,
        year: monthData.year,
        proposals: [],
      });
    }
    monthMap.get(key).proposals.push(...monthData.proposals);
  });

  const combinedData = Array.from(monthMap.values());

  combinedData.sort((a, b) => {
    const dateA = new Date(`${a.month} 1, ${a.year}`);
    const dateB = new Date(`${b.month} 1, ${b.year}`);
    return dateB - dateA;
  });

  combinedData.forEach((monthData) => {
    monthData.proposals.sort((a, b) => {
      const dateA = parseDate(a["Start Date"]);
      const dateB = parseDate(b["Start Date"]);

      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;

      return dateB - dateA;
    });

    monthData.proposals = monthData.proposals.filter((proposal) =>
      Object.values(proposal).some((value) => value !== "")
    );
  });

  return combinedData;
}

const PROTOCOL_PAGE_MAPPING = {
  arbitrum: ["NEXT_PUBLIC_NOTION_PAGE_ID1", "NEXT_PUBLIC_NOTION_PAGE_ID2"],
  optimism: ["NEXT_PUBLIC_NOTION_PAGE_ID3", "NEXT_PUBLIC_NOTION_PAGE_ID4"],
  uniswap: ["NEXT_PUBLIC_NOTION_PAGE_ID5", "NEXT_PUBLIC_NOTION_PAGE_ID6"],
  ens: ["NEXT_PUBLIC_NOTION_PAGE_ID7", "NEXT_PUBLIC_NOTION_PAGE_ID8"],
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
        (envKey) => process.env[envKey]
      );
    } else {
      pageIdsToUse = [
        process.env.NEXT_PUBLIC_NOTION_PAGE_ID1,
        process.env.NEXT_PUBLIC_NOTION_PAGE_ID2,
        process.env.NEXT_PUBLIC_NOTION_PAGE_ID3,
        process.env.NEXT_PUBLIC_NOTION_PAGE_ID4,
        process.env.NEXT_PUBLIC_NOTION_PAGE_ID5,
        process.env.NEXT_PUBLIC_NOTION_PAGE_ID6,
        process.env.NEXT_PUBLIC_NOTION_PAGE_ID7,
        process.env.NEXT_PUBLIC_NOTION_PAGE_ID8,
      ];
    }

    const headers = {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    };

    // Filter out any undefined page IDs
    const validPageIds = pageIdsToUse.filter((id) => id);

    if (validPageIds.length === 0) {
      return new Response(
        JSON.stringify({ error: "No valid Page IDs configured" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Format page IDs and determine voting type based on original index in the full array
    const formattedPageIds = validPageIds.map((id) => {
      // Find the original index of this page ID in the complete set of page IDs
      const originalIndex = Object.values(process.env).indexOf(id);
      return {
        id: id.replace(/-/g, ""),
        votingType:
          originalIndex % 2 === 0 ? "On-chain Voting" : "Off-chain Voting",
      };
    });

    // Fetch blocks for all pages in parallel
    const blocksPromises = formattedPageIds.map(({ id }) =>
      getAllBlocksRecursively(id)
    );
    const allBlocks = await Promise.all(blocksPromises);

    // Process data from all pages in parallel with their respective voting types
    const allMonthlyData = await Promise.all(
      allBlocks.map((blocks, index) =>
        extractTableData(blocks, formattedPageIds[index].votingType)
      )
    );

    // Combine and sort all data
    const combinedSortedData = combineAndSortMonthlyData(allMonthlyData.flat());

    return new Response(
      JSON.stringify({
        success: true,
        data: combinedSortedData,
        timestamp, // Include timestamp in response
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
