export async function GET() {
  try {
    // Fetch topics from the Arbitrum forum
    const response = await fetch(
      "https://forum.arbitrum.foundation/c/proposals/7.json"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch topics: ${response.statusText}`);
    }

    const data = await response.json();
    const topics = data.topic_list.topics;
    const users = data.users; // Extract users array

    // Get current time in UTC
    const currentTime = new Date();

    // Calculate the time 85 hours ago in UTC
    const manyHoursAgo = new Date(currentTime.getTime() - 128 * 60 * 60 * 1000);

    // Filter topics within the last 30 minutes based on last_posted_at
    const filteredTopics = topics.filter((topic) => {
      if (!topic.last_posted_at) return false;

      const lastPostedAt = new Date(topic.last_posted_at);
      return lastPostedAt >= manyHoursAgo && lastPostedAt <= currentTime;
    });

    // Sort the filtered topics in ascending order by last_posted_at
    const sortedTopics = filteredTopics.sort((a, b) => {
      return new Date(a.last_posted_at) - new Date(b.last_posted_at);
    });

    return new Response(JSON.stringify({ topics: sortedTopics, users }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Add CORS header if needed
      },
    });
  } catch (error) {
    console.error("Error fetching Arbitrum topics:", error);

    return new Response(JSON.stringify({ error: "Failed to fetch topics" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Add CORS header if needed
      },
    });
  }
}
