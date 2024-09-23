import mongoose from 'mongoose';
 
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  photo: String, // Optional field for photo URL
  username: {
    type: String,
    required: true,
  },
  categories: [String], // Array of categories
}, { timestamps: true });
 
const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);
 
export default Post;