import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Bold
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="flex flex-col gap-[85px] mb-[20px] mt-[30px]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="flex justify-around">
          <div className="w-[297px]">
            <img src="/src/assets/images/logo.png" alt="" />
            <br />
            <p>
              Cookpal is a recipe website with a wide variety of delicious
              recipes, easy-to-use search function. Join our community and let's
              cook together!
            </p>
          </div>
          <div className="w-[102px]">
            <h1 className="text-xl" style={{ fontWeight: 700 }}>
              Company
            </h1>
            <br />
            <ul className=" flex flex-col gap-[15px]">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/explore">Explore</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About us</NavLink>
              </li>
              <li>
                <NavLink to="/activity">Activity</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-[100px]">
            <h2 className="text-xl" style={{ fontWeight: 700 }}>
              Resources
            </h2>
            <br />
            <ul className=" flex flex-col gap-[15px]">
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/usecases">Use Cases</NavLink>
              </li>
              <li>
                <NavLink to="/testimonials">Testimonials</NavLink>
              </li>
              <li>
                <NavLink to="/insights">Insights</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-[400px]">
            <img src="/src/assets/images/logo.png" alt="" />
            <br />
            <p>
              Subscribe for daily blogs and more recipes
            </p>
            <br />
            <div className="flex gap-[7px] ">
              <input
                type="text"
                placeholder="Your Email                                         @"
                className=" border border-black h-[44px] w-[290px] rounded px-[7px]"
              />
              <button
                style={{ backgroundColor: "#509E2F" }}
                className="text-white h-[44px] w-[101px] rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-[20px] justify-center">
          <img
            src="/src/assets/images/instagram.png"
            alt=""
            className="w-[30px] h-[30px]"
          />
          <img
            src="/src/assets/images/twitter.png"
            alt=""
            className="w-[28px] h-[28px]"
          />
          <img
            src="/src/assets/images/linkedin.png"
            alt=""
            className="w-[28px] h-[28px]"
          />
          <img
            src="/src/assets/images/fb.webp"
            alt=""
            className="w-[26px] h-[26px]"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
