import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [currentStartId, setCurrentStartId] = useState(52821); // Starting ID for recipes

  useEffect(() => {
    fetchRecipes(currentStartId);
  }, [currentStartId]);

  const fetchRecipes = async (startId) => {
    const recipeIds = Array.from({ length: 8 }, (_, index) => startId + index); // Generate range of IDs
    const responses = await Promise.all(
      recipeIds.map((id) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        ).then((res) => res.json())
      )
    );

    const fetchedRecipes = responses
      .map((response) => response.meals && response.meals[0]) // Extract recipes
      .filter(Boolean); // Remove null/undefined results

    setRecipes((prevRecipes) => [...prevRecipes, ...fetchedRecipes]); // Append to existing recipes
  };

  const handleLoadMore = () => {
    setCurrentStartId((prevId) => prevId + 9); // Increment start ID by 9
  };

  return (
    <>
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
          onClick={handleLoadMore} // Correctly call the handler
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default Recipes;
