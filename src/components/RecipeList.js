import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h2>
          <p>{recipe.description}</p>
        </div>
      ))}
      <Link to="/add">Add Recipe</Link>
    </div>
  );
}

export default RecipeList;
