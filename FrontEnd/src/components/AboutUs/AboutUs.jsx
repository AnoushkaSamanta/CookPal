import React from 'react';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Bold
function AboutUs() {
  return (
    <div className="flex flex-col items-center p-6" style={{ fontFamily: "Poppins, sans-serif" }}>
      <h1 style={{ color: "#509E2F" }} className=" text-4xl mb-4">About Us</h1>
      <p className="text-2xl ">
        Welcome to CookPal! Your go-to destination for delicious recipes and a community of food enthusiasts.
      </p> 
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl mt-4" style={{ color: "#509E2F" }}>Our Mission</h2>
        <p className="text-xl mt-4">
          At CookPal, our mission is to make cooking accessible and enjoyable for everyone. Whether you're a beginner or a seasoned chef,
          we provide easy-to-follow recipes, cooking tips, and inspiration to help you create mouthwatering dishes.
        </p>
        <h2 className="text-2xl mt-8"  style={{ color: "#509E2F" }}>Why Choose CookPal?</h2>
        <ul className="list-none px-0 mt-4 text-xl">
          <li className="mb-2">🍴 A wide range of recipes for every occasion</li>
          <li className="mb-2">🌟 Step-by-step instructions for guaranteed success</li>
          <li className="mb-2">👩‍🍳 A community of passionate food lovers</li>
          <li className="mb-2">💡 Innovative ideas to take your cooking to the next level</li>
        </ul>
        <h2 className="text-2xl mt-8" style={{ color: "#509E2F" }}>Our Story</h2>
        <p className="text-xl mt-4">
          CookPal was founded by food enthusiasts who wanted to share their love for cooking with the world. 
          Starting with a small collection of family recipes, we’ve grown into a vibrant community that celebrates
          creativity and passion in the kitchen.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

