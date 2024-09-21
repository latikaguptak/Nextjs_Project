"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';  // Import toastify CSS
import styles from './page.module.css'; // Import your CSS styles


function NewPost() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [photo, setPhoto] = useState('');
  const [username, setUsername] = useState('');
  const [categories, setCategories] = useState('');
  const [loading, setLoading] = useState(false); // State for loader

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const postData = {
      title,
      desc,
      photo,
      username,
      categories: categories.split(',').map((category) => category.trim()), // Convert comma-separated string to array
    };
  
    try {
      setLoading(true); // Show loader
  
  
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success("Post created successfully!");
        console.log("Created post:", data);
        
        // Clear form fields after successful submission
        setTitle('');
        setDesc('');
        setPhoto('');
        setUsername('');
        setCategories('');
      } else {
        toast.error(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Error creating post");
    } finally {
      setLoading(false); // Hide loader when request completes
    }
  };
  

  return (
    <div className={styles.container}>
      <ToastContainer /> {/* Toast container for notifications */}
      <h1 className={styles.title}>Create a New Post</h1>
      {loading && <div className={styles.loader}>Loading...</div>} {/* Loader */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className={styles.textarea}
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Categories (comma separated)"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}

export default NewPost;
