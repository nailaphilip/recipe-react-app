import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeList from "../components/RecipeList";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Recipe App</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default Home;
