import connectMongo from '../../../../utils/mongodb';
import Post from '../../../../../models/Post';
import { NextResponse } from 'next/server';

export async function GET(req, {params}) {
    const {id} = params;
  try {
    // Connect to MongoDB
    await connectMongo();

    // Find all posts in the database
    const post = await Post.findById(id);

    // Return the posts as JSON
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 });
  }
}