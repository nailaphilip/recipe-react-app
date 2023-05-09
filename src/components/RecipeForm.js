import React, { useState } from "react";
import axios from "axios";

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipes", { title, description })
      .then(() => {
        setTitle("");
        setDescription("");
        alert("Recipe added successfully!");
      })
      .catch(() => {
        alert("Failed to add recipe!");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
