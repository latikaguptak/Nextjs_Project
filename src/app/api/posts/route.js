import connectMongo from '../../../utils/mongodb';
import Post from '../../../../models/Post';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Parse the JSON body of the request
    const body = await req.json();
    const { title, desc, photo, username, categories } = body;

    // Connect to MongoDB
    await connectMongo();

    // Create a new Post using data from the request body
    const newPost = new Post({
      title,
      desc,
      photo,
      username,
      categories,
    });

    // Save the post to the database
    const savedPost = await newPost.save();

    // Return the created post as a response
    return NextResponse.json(savedPost, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
  }
}
export async function GET() {
  try {
    // Connect to MongoDB
    await connectMongo();

    // Find all posts in the database
    const posts = await Post.find({});

    // Return the posts as JSON
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 });
  }
}