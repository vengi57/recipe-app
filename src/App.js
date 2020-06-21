import React, { useEffect, useState } from "react";
import Recipes from "./Recipes.js";
import "./App.css";

const App = () => {
  const APP_ID = "4ff0dab9";
  const APP_KEY = "83816be5c1a449944c97c6e83c121abb";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipe = async () => {
    const responce = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await responce.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  useEffect(() => {
    getRecipe();
  }, [query]);

  return (
    <div className="App">
      <br />
      <h1 className="title-text">🍗 FooD RecipE 🍖</h1>
      <h3 className="text-info">This App is made by Vengi 🤓 and inspired from DEV Ed 🖤</h3>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search here for Food Recipe..."
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipe-container">
        {recipes.map((index, key) => (
          <Recipes
            // key={key}
            title={index.recipe.label}
            calories={index.recipe.calories}
            image={index.recipe.image}
            ingredients={index.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
