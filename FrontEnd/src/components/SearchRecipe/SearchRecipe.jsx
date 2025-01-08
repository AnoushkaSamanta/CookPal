import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

function SearchRecipe({ recipe }) {
  const [data, setData] = useState(null);
  const [foundrecipe,setFoundRecipe]=useState(false)
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
        );
        const result = await res.json();

        if (result.meals){
             setData(result.meals);
             setFoundRecipe(true)
        }
        else setData([]);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setData([]);
      }
    };

    fetchRecipe();
  }, [recipe]);

  if (!data) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="mt-[50px] flex flex-wrap justify-center gap-[40px] mb-[50px]">
      {data.length === 0  && !setFoundRecipe ? (
        <p>No recipe found</p>
      ) : (
        data.map((meal) => (
          <Card
            key={meal.idMeal}
            idMeal={meal.idMeal}
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
            strCategory={meal.strCategory}
            strArea={meal.strArea}
          />
        ))
      )}
    </div>
  );
}

export default SearchRecipe;
