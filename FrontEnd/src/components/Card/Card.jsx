import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const [isRed, setIsRed] = useState(false);
  const [isYellow, setIsYellow] = useState(false);

  const navigate = useNavigate();


  const toggleHeartColor = (e) => {
    e.stopPropagation();
    setIsRed(!isRed);

  };

  const toggleStarColor = (e) => {
    e.stopPropagation();
    setIsYellow(!isYellow);

  };

  const handleCardClick = () => {
    navigate(`/recipe/${props.idMeal}`);
  };
  return (
    <div
      className="w-[300px] h-[350px] border border-[#e5e7eb] shadow p-[12px] rounded-2xl"
      onClick={handleCardClick}
    >
      <img
        src={props.strMealThumb}
        alt=""
        className="w-[285px] h-[200px] rounded-2xl"
      />
      <div>
        <p style={{ color: "#A1A1A1" }}>{props.strCategory}</p>
        <div className="flex justify-between mb-[10px]">
          <h1 className="text-xl font-bold">{props.strMeal}</h1>
          <div className="flex flex-col mr-[5px]">
            <img
              src={
                isYellow
                  ? "/src/assets/images/yellowstar.svg"
                  : "/src/assets/images/star.svg"
              }
              alt="Star"
              onClick={toggleStarColor}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p style={{ color: "#DC582A" }} className="font-bold text-xl">
            {props.strArea}
          </p>
          <div className="flex gap-[3px]">
            <img
              src={
                isRed
                  ? "/src/assets/images/heart_red.svg"
                  : "/src/assets/images/heart.svg"
              }
              alt="Heart"
              onClick={toggleHeartColor}
              style={{ cursor: "pointer" }}
            />
            <img src="/src/assets/images/comment.svg" alt="Comment" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Card;
