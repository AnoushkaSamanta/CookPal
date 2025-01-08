import React from "react";
import "@fontsource/poppins"; // Font styles

function Help() {
  return (
    <div
      className="text-gray-800 px-4 py-8"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h1
        className="text-4xl font-bold text-center mb-12"
        style={{ color: "#509E2F" }}
      >
        Hi, how can we help you?
      </h1>

      <div className="container mx-auto flex flex-wrap gap-8">
        <Section
          title="Getting Started"
          content={[
            {
              heading: "Browse Recipes",
              description: "Visit the 'Recipes' section to explore a variety of cuisines and dishes. Use the search bar to find specific recipes by name or ingredients."
            },
            {
              heading: "Create an Account",
              description: "Sign up to save your favorite recipes. Log in to access your personalized recipe collection."
            }
          ]}
        />

        <Section
          title="Using Recipes"
          content={[
            {
              heading: "Recipe Details",
              description: "Click on a recipe to view detailed instructions, ingredients, and preparation time. Check nutritional information for each dish."
            }
          ]}
        />

        <Section
          title="Adding Your Own Recipes"
          content={[
            {
              heading: "Submit a Recipe",
              description: "Go to 'Share your Recipe' and fill out the form with your recipe details. Upload an image of your dish for better visibility."
            },
            {
              heading: "Edit or Delete Recipes",
              description: "Access 'Recipes & Menus' in your account to edit or remove any of your submissions."
            }
          ]}
        />

        <Section
          title="Common Issues"
          content={[
            {
              heading: "Forgot Password",
              description: "Click 'Forgot Password' on the login page to reset your password."
            },
            {
              heading: "Recipe Not Loading",
              description: "Ensure you have a stable internet connection. Clear your browser cache and refresh the page."
            },
            {
              heading: "Issues Submitting a Recipe",
              description: "Check that all required fields are filled. Ensure the image size doesn’t exceed the limit."
            }
          ]}
        />

        <Section
          title="FAQs"
          content={[
            {
              heading: "How do I contact support?",
              description: "Visit our 'Contact Us' page or email us at support@cookpal.com."
            },
            {
              heading: "Are the recipes verified?",
              description: "All recipes are reviewed before being published, but we recommend trying them and leaving feedback."
            }
          ]}
        />

        <Section
          title="Contact Us"
          content={[
            {
              heading: "Get in Touch",
              description: "Need further assistance? Email us at support@cookpal.com or call us at +123-456-7890. Live chat is available on our website from 9 AM to 6 PM (Monday to Friday)."
            }
          ]}
        />
      </div>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div className="w-full md:w-[45%] bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform duration-200"  >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {content.map((block, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-medium mb-2 "  style={{ color: "#509E2F" }}>{block.heading}</h3>
          <p>{block.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Help;
