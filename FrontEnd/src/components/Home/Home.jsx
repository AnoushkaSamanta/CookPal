import React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Bold
import { Link, NavLink } from "react-router-dom";
import Card from "../Card/Card";
import Recipes from "../Recipes/Recipes";

function Home() {
  return (
    <>
      <div
        className="relative flex justify-center mt-[60px] mb-[40px]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <img
          src="/src/assets/images/coverpic.jpg"
          className="h-[430px] w-[1350px]  rounded-3xl "
        />
        {/* Dark Overlay */}
        <div className="absolute   h-[430px] w-[1350px] bg-black bg-opacity-50 rounded-3xl"></div>
        <div className="absolute top-[100px] left-[180px] flex flex-col  rounded-3xl w-[400px]">
          <h2 className="text-2xl mb-2 " style={{ color: "#DC582A" }}>
            Trending Now
          </h2>
          <h3 className="text-4xl font-bold text-white">
            Mike's famous salad with cheese
          </h3>
          <p className="text-md mt-3 text-white">By John Mike</p>
        </div>
        <div className="absolute flex gap-[10px] top-[350px]">
          <img src="/src/assets/images/leftarrow.svg" alt="" />
          <img src="/src/assets/images/rightarrow.svg" alt="" />
        </div>
        <div className="absolute flex gap-[5px] top-[400px]">
          <img src="/src/assets/images/circle.svg" alt="" />
          <img src="/src/assets/images/circle.svg" alt="" />
          <img src="/src/assets/images/circle.svg" alt="" />
          <img src="/src/assets/images/circle.svg" alt="" />
          <img src="/src/assets/images/circle.svg" alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-[37px]">
        <NavLink to="/recipesandmenus">
          <div
            className="flex  h-[80px]  w-[240px] text-white rounded-xl p-[25px] justify-around"
            style={{ backgroundColor: "#F6784C" }}
          >
            <p>Recipes & Menus</p>
            <img src="/src/assets/images/rightarrow2.svg" alt="" />
          </div>
        </NavLink>
        <NavLink to="/sharerecipe">
          <div
            className="flex justify-around h-[80px] w-[240px]  text-white rounded-xl p-[25px]"
            style={{ backgroundColor: "#C4D600" }}
          >
            <p>Share your recipe</p>
            <img src="/src/assets/images/rightarrow2.svg" alt="" />
          </div>
        </NavLink>
        <NavLink to="/custommealplan">
          <div
            className="flex justify-around h-[80px]  w-[240px] text-white rounded-xl p-[25px]"
            style={{ backgroundColor: "#EAAA00" }}
          >
            <p>Custom meal plan</p>
            <img src="/src/assets/images/rightarrow2.svg" alt="" />
          </div>
        </NavLink>
        <NavLink to="/creategrocerylist">
          <div
            className="flex justify-around h-[80px] w-[240px]  text-white rounded-xl p-[25px]"
            style={{ backgroundColor: "#ED8B00" }}
          >
            <p>Create grocery list</p>
            <img src="/src/assets/images/rightarrow2.svg" alt="" />
          </div>
        </NavLink>
        <NavLink to="/cookingtipsandtricks">
          <div
            className="flex justify-around h-[80px]  w-[240px] text-white rounded-xl p-[25px]"
            style={{ backgroundColor: "#84BD00" }}
          >
            <p>Cooking Tips & Tricks</p>
            <img src="/src/assets/images/rightarrow2.svg" alt="" />
          </div>
        </NavLink>
      </div>
     
        <Recipes />


    </>
  );
}

export default Home;
