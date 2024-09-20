import { useState } from "react";
  
function NewPost() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const [username, setUsername] = useState("");
  const [categories, setCategories] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      desc,
      photo,
      username,
      categories: categories.split(",").map((category) => category.trim()), // Convert comma-separated string to array
    };

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Post created successfully!");
        console.log("Created post:", data);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Categories (comma separated)"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
export default NewPost;
