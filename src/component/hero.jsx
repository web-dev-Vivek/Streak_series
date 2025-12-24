import React from "react";

function Hero({ top }) {
  return (
    <div
      className={`w-screen h-screen flex border-2 border-dashed p-10 items-center m-${top} justify-center `}
    >
      <div className="border-2 border-dashed w-3/4 h-3/4"></div>
    </div>
  );
}

export default Hero;
