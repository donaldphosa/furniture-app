import React, { useState } from "react";
import profile from "../../assests/profile.jpg";
import "./testimonials.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Testimonials() {
  const [pos, setPos] = useState(0);
  return (
    <div className="testimonialsMainContainer">
      <h1 className="testimonialHeader">Testimonials</h1>
      <p className="testimonialsHeadDesc">over 1500 happy customers</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{ transform: `translateX(${pos}%)` }}
          className="testimonialsSlider"
        >
          <Testiminy />
          <Testiminy />
          <Testiminy />
          <Testiminy />
          <Testiminy />
          <Testiminy />
        </div>
        <div className="iconsHouse">
          <div
            className="arrowsContainer"
            onClick={() => {
              setPos((prev) => prev + 100);
            }}
          >
            <AiOutlineArrowLeft color="#FDFBF8" />
          </div>
          <div
            className="arrowsContainer"
            onClick={() => {
              setPos((prev) => prev - 100);
            }}
          >
            <AiOutlineArrowRight color="#FDFBF8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

const Testiminy = () => {
  return (
    <div className="testimonyContainer">
      <div className="imgContainer">
        <img className="image" alt="" src={profile} />
      </div>
      <div className="testimonialDescription">
        <p className="testmonialMessege">
          “My experience with Mark is a complete sucess, from customer service,
          wide range of products, clean store, purchasing experience, the
          newsletter.Thank you.”
        </p>
        <p className="testimonyName">Donald Phosa</p>
        <p className="testimonyOccupation">CEO of PD Media</p>
      </div>
    </div>
  );
};
