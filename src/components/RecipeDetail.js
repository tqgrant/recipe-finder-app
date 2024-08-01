import React from 'react';

const RecipeDetail = ({ recipe, onClose }) => {
  return (
    <div className="recipe-detail">
      <button onClick={onClose}>Close</button>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <ul>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Calories: {Math.round(recipe.calories)}</p>
    </div>
  );
};

export default RecipeDetail;
