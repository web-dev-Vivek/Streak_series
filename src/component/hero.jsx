import React from "react";
import img from "../assets/Real.jpg";
import Header from "./header.jsx";

function Hero({ top }) {
  return (
    <div
      className={`w-screen h-screen flex border-2 border-white rounded-3xl items-center m-${top} justify-center `}
    >
      <div className="border-2 border-white rounded-3xl mt-16 w-23/24 h-21/24">
        <img
          src={img}
          alt="Hero"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Hero;
