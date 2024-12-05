import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

let globalUsers = []; // Global array to store users
let globalSrNo = 46;

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Retrieves the zero-based month index (0–11) and converts it to a one-based month number (1–12).
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

function getUsername(userId) {
  const user = globalUsers.find((user) => user.id.toString() === userId);
  return user ? user.username : "Unknown User";
}

export async function POST(req) {
  try {
    // Fetch data from arbitrum-new-topics API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/arbitrum-new-topics`
    );
    const data = await response.json();

    const topics = data.topics;
    globalUsers = data.users; // Store users globally
    console.log("globallll", globalUsers);

    // Validate response
    if (!topics || topics.length === 0) {
      return new Response(JSON.stringify({ error: "No topics available" }), {
        status: 400,
      });
    }

    const databaseId = process.env.NOTION_DATABASE_ID;

    // // Sort topics by last_posted_at in ascending order
    const sortedTopics = topics
      .sort((a, b) => new Date(a.last_posted_at) - new Date(b.last_posted_at)).reverse()

    let srNo = globalSrNo + sortedTopics.length;
    // let srNo = 1;

    // Iterate over topics and insert into Notion database
    for (const topic of sortedTopics) {
      console.log("Inserting Sr. No.:", srNo); // Debug log
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          "Sr. No.": {
            title: [
              {
                text: {
                  content: srNo.toString(), // Sr. No.
                },
              },
            ],
          },
          "Post Link": {
            rich_text: [
              {
                text: {
                  content: topic.title, // Text to display
                  link: {
                    url: `https://forum.arbitrum.foundation/t/${topic.slug}/${topic.id}`, // Constructed URL
                  },
                },
              },
            ],
          },
          "Category of Post": {
            rich_text: [
              {
                text: {
                  content: "Proposals", // Static value
                },
              },
            ],
          },
          "Date of Posting": {
            rich_text: [
              {
                text: {
                  content: formatDate(topic.last_posted_at), // Formatted date
                },
              },
            ],
          },
          "Posted by": {
            rich_text: [
              {
                text: {
                  content: getUsername(topic.posters[0].user_id.toString()), // First user's ID from posters array
                },
              },
            ],
          },
        },
      });

      srNo--;
    }

     // Update the globalSrNo with the last Sr. No. inserted
     globalSrNo = srNo + sortedTopics.length;

    return new Response(
      JSON.stringify({ success: "Data inserted into Notion" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error inserting data into Notion:", error);
    return new Response(JSON.stringify({ error: "Failed to insert data" }), {
      status: 500,
    });
  }
}
