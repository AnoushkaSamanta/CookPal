import React from "react";
import "@fontsource/poppins"; // Font styles
import { useState,useEffect } from "react";
import Recipes from "../Recipes/Recipes";
import Card from "../Card/Card";
function Explore() {
    const [recipes, setRecipes] = useState([]);
    const [currentStartId, setCurrentStartId] = useState(52851); // Starting ID for recipes
  
    useEffect(() => {
      fetchRecipes(currentStartId);
    }, [currentStartId]);
  
    const fetchRecipes = async (startId) => {
      const recipeIds = Array.from({ length: 8 }, (_, index) => startId + index); // Generate range of IDs
      const responses = await Promise.all(
        recipeIds.map((id) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json())
        )
      );
  
      const fetchedRecipes = responses
        .map((response) => response.meals && response.meals[0]) // Extract recipes
        .filter(Boolean); // Remove null/undefined results
  
      setRecipes((prevRecipes) => [...prevRecipes, ...fetchedRecipes]); // Append to existing recipes
    };
  
    const handleExplore = () => {
      setCurrentStartId((prevId) => prevId + 9); // Increment start ID by 9
    };
  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="mt-[30px] flex flex-col items-center gap-6"
    >
      <div className="w-[1000px] mx-auto grid grid-cols-3 gap-4 p-4">
        <div className="relative">
          <img
            src="/src/assets/images/foodimage1.jpg"
            alt="Food 1"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
        <div className="relative">
          <img
            src="/src/assets/images/pasta.jpg"
            alt="Food 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src="/src/assets/images/foodimage2.jpg"
            alt="Food 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src="/src/assets/images/coverpic.jpg"
            alt="Food 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src="/src/assets/images/foodimage3.jpg"
            alt="Food 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src="/src/assets/images/foodimage4.jpg"
            alt="Food 6"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-[900px]">
        <p className="text-xl" >
          Welcome to Cookpal, your go-to destination for discovering delicious
          recipes! Whether you're a seasoned chef or just starting to explore
          the kitchen, Cookpal offers a wide variety of recipes to suit every
          taste and skill level. From quick weeknight dinners to elaborate
          holiday feasts, you'll find inspiration for every meal. Join our
          community and start cooking up something special today!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl " style={{ color: "#509E2F" }} >Explore More...</h1>
            <div className="mt-[50px] flex flex-wrap justify-center gap-[40px] mb-[50px]">
        {recipes.map((recipe) => (
          <Card
            key={recipe.idMeal}
            idMeal={recipe.idMeal}
            strMeal={recipe.strMeal}
            strMealThumb={recipe.strMealThumb}
            strCategory={recipe.strCategory}
            strArea={recipe.strArea}
          />
        ))}
      </div>
      <div className="flex justify-center text-xl">
        <button
          style={{ backgroundColor: "#509E2F" }}
          className="text-white h-[52px] w-[400px] rounded-xl"
          onClick={handleExplore} // Correctly call the handler
        >
          Explore More Such Recipes
        </button>
      </div>
      </div>
    </div>
  );
}

export default Explore;
