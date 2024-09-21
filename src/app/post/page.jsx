"use client"
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/posts'); // Make a GET request to the API
        const data = await response.json();
        
        if (response.ok) {
          setPosts(data); // Set the posts into the state
          toast.success("Posts fetched successfully!");
        } else {
          toast.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        toast.error('Error fetching posts');
      } finally {
        setLoading(false); // Stop the loader
      }
    };

    fetchPosts();
  }, []); // Fetch posts on component mount

  return (
    <div>
      <ToastContainer />
      <h1>All Posts</h1>
      {loading && <p>Loading posts...</p>}
      {!loading && posts.length === 0 && <p>No posts available</p>}
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <small>By {post.username}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
