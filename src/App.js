import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import RecipeDetail from './components/RecipeDetail';
import axios from 'axios';

const API_ID = '06c4acbb'; // Replace with your actual API ID
const API_KEY = '554d3c5b5319fc37a0384f9f645bd8c2'; // Replace with your actual API Key


function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (query) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    setRecipes(response.data.hits);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe.recipe);
  };

  const handleCloseDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Finder</h1>
        <Search onSearch={handleSearch} />
        {selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} onClose={handleCloseDetail} />
        ) : (
          <div className="recipes">
            {recipes.map((recipe, index) => (
              <div
                className="recipe"
                key={index}
                onClick={() => handleRecipeClick(recipe)}
              >
                <h2>{recipe.recipe.label}</h2>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
