import React, { useState } from "react";
import "./popular.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Popular() {
  const [pos, setPos] = useState(0);

  return (
    <main className="popular_main">
      <h1>Popular Products</h1>
      <div style={{ transform: `translateX(${pos}px)` }} className="slide">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
      <div className="iconContainer">
        <div
          className="arrowsContainer"
          onClick={() => {
            setPos((prev) => prev + 300);
          }}
        >
          <AiOutlineArrowLeft color="#FDFBF8" />
        </div>
        <div
          className="arrowsContainer"
          onClick={() => {
            setPos((prev) => prev - 300);
          }}
        >
          <AiOutlineArrowRight color="#FDFBF8" />
        </div>
      </div>
    </main>
  );
}

export default Popular;

const PopularCard = () => {
  return (
    <div className="card">
      <img
        alt=""
        src="https://blog.furniturepick.com/wp-content/uploads/2021/05/Loudon-Storage-Bedroom-Set-by-Homelegance-Furniture.jpeg"
        className="popularImg"
      />
      <div className="popularDetails">
        <p className="popularName">Premium Sofa</p>
        <p className="popularDescription">sitting room set</p>
        <p className="popularPrice">$145</p>
      </div>
    </div>
  );
};
