import connectMongo from '../../utils/mongodb';
import Post from '../../../models/Post';
 
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to MongoDB
      await connectMongo();
 
      // Create a new Post using data from the request body
      const { title, desc, photo, username, categories } = req.body;
 
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
      res.status(201).json(savedPost);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Error creating post' });
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: 'Method not allowed' });
  }
}

