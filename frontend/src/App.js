import { useEffect, useState } from "react";
import API from "./api";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/blogs", {
        title,
        content,
        author,
      });

      setTitle("");
      setContent("");
      setAuthor("");

      fetchBlogs();

      alert("Blog Created Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Blog Platform</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">Create Blog</button>
      </form>

      <hr />

      <h2>All Blogs</h2>

      {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <small>By {blog.author}</small>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;