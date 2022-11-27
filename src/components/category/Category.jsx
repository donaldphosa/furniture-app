import React from "react";
import "./category.css";
import { AiOutlineSearch, AiOutlineArrowRight } from "react-icons/ai";

function Category() {
  return (
    <main className="category_main">
      <h1>Explore by Category</h1>
      <div className="category_container">
        <div className="category_left">
          <div className="search">
            <AiOutlineSearch fill="#6E757E" />
            <input className="field" color="#6E757E" placeholder="Search" />
          </div>
          <div className="scroll_category">
            <p>Bedroom</p>
            <p>Dinning Room</p>
            <p>Meeting Room</p>
            <p>Workspace</p>
            <p>Living Room</p>
            <p>Kitchen</p>
            <p>Living Space</p>
          </div>
          <button>
            All Categories <AiOutlineArrowRight size={24} />
          </button>
        </div>
        <div className="category_right">
          <CatGrid />
          <CatGrid />
          <CatGrid />
          <CatGrid />
          <CatGrid />
          <CatGrid />
        </div>
      </div>
    </main>
  );
}

export default Category;

const CatGrid = () => {
  return (
    <div className="container_grid">
      <div className="overlay">
        <h1>Bedroom</h1>
        <button>Explore</button>
      </div>
      <img src="https://blog.furniturepick.com/wp-content/uploads/2021/05/Loudon-Storage-Bedroom-Set-by-Homelegance-Furniture.jpeg" />
    </div>
  );
};
