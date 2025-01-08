import React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Bold
function Team() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }} className="flex flex-col items-center mt-5">
      <h1 style={{ color: "#509E2F" }} className=" text-4xl mb-4">Our Team</h1>
      <p className="text-2xl">
        Meet the amazing people behind CookPal!
      </p>
      <div className="mt-10">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-xl">Anoushka Samanta</h2>
          <p style={{ color: "#509E2F" }}>Founder & Recipe Curator</p>
        </div>
        <div  className="flex flex-col items-center mb-4">
          <h2 className="text-xl">Rahul Verma</h2>
          <p style={{ color: "#509E2F" }}>Head of Development</p>
        </div>
        <div  className="flex flex-col items-center mb-4">
          <h2 className="text-xl">Priya Kapoor</h2>
          <p style={{ color: "#509E2F" }}>Content Strategist</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
