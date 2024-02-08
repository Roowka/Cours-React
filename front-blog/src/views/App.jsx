import "./App.css";
import Post from "../components/post";
import { useEffect, useState } from "react";

function App() {
  const API_URL = "http://localhost:3001/posts";

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function fetchPosts() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      throw error;
    }
  }

  async function createPost() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    try {
      await fetch(API_URL, requestOptions).then((response) =>
        console.log(response.json())
      );
      await fetchPosts();
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <div className="d-flex flex-column align-items-center">
        <h1>Le blog de Lucas</h1>
        <div className="d-flex flex-column align-items-center">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titre"
            className="form-control mt-3"
          />
          <textarea
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Contenu"
            className="form-control mt-3"
          />
          <button className="btn btn-primary mt-3" onClick={createPost}>
            Ajouter un post
          </button>
        </div>
        <div>
          {posts.map((post) => (
            <Post
              key={post._id}
              title={post.title}
              content={post.content}
              date={post.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
