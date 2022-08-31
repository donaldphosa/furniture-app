import React from "react";
import Navbar from "./components/hero_section/Navbar";
import Hero_sec from "./components/hero_section/Hero_sec";
import Category from "./components/category/Category";
import Popular from "./components/popular/Popular";

function App() {

 
  return (
    <div className="App">
        <Navbar/>
        <div className="hero_section">
          <Hero_sec/>
        </div>
        <Category/>
        <Popular/>
    </div>
  );
}

export default App;
