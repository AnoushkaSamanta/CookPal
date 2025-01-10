import React, { useState } from "react";
import "@fontsource/poppins"; // Font styles
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchRecipe from "../SearchRecipe/SearchRecipe";
import { useEffect } from "react";
import axios from "axios"; 

function Header() {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    setShowResults(false); // Reset when the route changes
    setSearch(""); // Clear search input
  }, [location]);
  const handleClick = () => {
    setShowResults(true); // Show the `SearchRecipe` component
  };


  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3001/logout", {}, {
        withCredentials: true
      });
      
      if (response.data.success) {
        window.location.href = '/';
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <div
        className="h-[40px] flex justify-around mt-[19px]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="h-[35px] w-[115px] flex justify-between">
          <img src="/src/assets/images/hamburger.svg" alt="menu" className="hidden" />
          <img src="/src/assets/images/logo.png" alt="logo" width="96px" height="60px"/>
        </div>
        <div className="flex">
          <div className="bg-gray-200 h-[40px] flex justify-between p-[5px] rounded">
            <select name="" id="" className="bg-gray-200">
              <option value="All categories">All categories</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
            <NavLink to="/searchrecipe">
              <input
                type="text"
                placeholder=" | Search for recipes..."
                className="bg-gray-200 w-full outline-none border-none pl-2 leading-4"
                value={search}
                onChange={handleSearch}
              />
            </NavLink>
          </div>
          <div
            onClick={handleClick}
            className="h-[40px] w-[40px] p-[7px] rounded"
            style={{ backgroundColor: "#509E2F", cursor: "pointer" }}
          >
            <img src="/src/assets/images/search.svg" alt="search" width={22} />
          </div>
        </div>
        <div className="w-[200px]">
          <ul className="flex justify-between w-[200px]">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-green-700" : "text-gray-700"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-green-700" : "text-gray-700"
                  }`
                }
              >
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-green-700" : "text-gray-700"
                  }`
                }
              >
                Help
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="h-[35px]">
          <img
            src="/src/assets/images/profile.jpg"
            alt="profile"
            className="rounded-full h-[35px] w-[35px]"
          />
        </div>
        
        <div className="bg-red-500 text-white p-2 rounded-lg" onClick={handleLogout}>Logout</div>
      </div>
      {showResults && <SearchRecipe recipe={search} />}{" "}
      {/* Render SearchRecipe */}
    </>
  );
}

export default Header;
