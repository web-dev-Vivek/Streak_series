import React from "react";
import img from "../assets/Real.jpg";
import Header from "./header.jsx";
import Usercard from "./Usercard.jsx";

function Hero({ top }) {
  return (
    <div
      className={`w-screen h-screen flex border-2 border-white rounded-3xl items-center m-${top} justify-center `}
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="border-2 object-contain flex justify-end items-center border-white rounded-3xl mt-16 w-23/24 h-21/24"
      >
        <div className="bg-red-500 w-7/22 h-16/22 mr-9">
          <Usercard />
        </div>
      </div>
    </div>
  );
}

export default Hero;
