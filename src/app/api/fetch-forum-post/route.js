// app/api/fetch-forum-post/route.ts
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  const postNumber = searchParams.get('postNumber');

  console.log(`Fetching forum post with postId: ${postId}, postNumber: ${postNumber}`);

  if (!postId || !postNumber) {
    return NextResponse.json(
      { error: 'Missing postId or postNumber' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://forum.arbitrum.foundation/t/${postId}/${postNumber}.json`
    );
    
    if (!response.ok) {
      console.error(`Failed to fetch forum post: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { error: 'Failed to fetch forum post' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Find the specific post with the matching post_number
    const targetPost = data.post_stream?.posts?.find(
      post => post.post_number === parseInt(postNumber)
    );

    if (!targetPost) {
      console.warn(`Post not found for postNumber: ${postNumber}`);
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Assuming 'cooked' is a field in targetPost
    if (!targetPost.cooked) {
      console.warn(`'cooked' field missing in targetPost for postNumber: ${postNumber}`);
    }

    return NextResponse.json(targetPost);
  } catch (error) {
    console.error('Error fetching forum post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch forum post' },
      { status: 500 }
    );
  }
}
