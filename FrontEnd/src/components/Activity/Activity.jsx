import React from 'react';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Bold
function Activity() {
  return (
    <div className="flex flex-col items-center p-6" style={{ fontFamily: "Poppins, sans-serif" }}>
      <h1 className="text-3xl mb-4" style={{ color: "#509E2F" }}>Our Activities</h1>
      <p className="text-center  text-xl mb-4">
        At CookPal, we believe in engaging with our community and celebrating food in fun and interactive ways.
      </p>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl" style={{ color: "#509E2F" }}>Upcoming Events</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800">Virtual Cooking Classes</h3>
            <p className="text-gray-500 mt-2">
              Join our interactive online cooking sessions where you'll learn to create delicious dishes with expert chefs.
            </p>
            <p className="text-gray-500 mt-1">Date: January 15, 2024</p>
            <p className="text-gray-500">Time: 6:00 PM (GMT)</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800">Recipe Challenge</h3>
            <p className="text-gray-500 mt-2">
              Show off your culinary skills by participating in our monthly recipe challenge. Winners will get featured on our website!
            </p>
            <p className="text-gray-500 mt-1">Date: February 5, 2024</p>
            <p className="text-gray-500">Time: 12:00 PM (GMT)</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800">Community Cook-Off</h3>
            <p className="text-gray-500 mt-2">
              A fun, friendly cooking competition where you’ll compete against others to make the best dishes.
            </p>
            <p className="text-gray-500 mt-1">Date: March 20, 2024</p>
            <p className="text-gray-500">Time: 3:00 PM (GMT)</p>
          </div>
        </div>

        <h2 className="text-2xl mt-8" style={{ color: "#509E2F" }}>Past Activities</h2>
        <div className="mt-4 space-y-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800">CookPal Recipe Expo 2023</h3>
            <p className="text-gray-500 mt-2">
              A grand event where food enthusiasts gathered to showcase their signature dishes. It was a huge success!
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800">International Food Festival</h3>
            <p className="text-gray-500 mt-2">
              Our team participated in the International Food Festival 2023, where we shared global cuisines and cooking tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
