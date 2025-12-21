import React from "react";
import Usercard from "./Usercard";

function Isloggedin({ isloggedin }) {
  return (
    <>
      {isloggedin ? (
        <Usercard
          username="Vivek jha"
          email="progamervivek2020@gmail.com"
          age={20}
          income={0}
        />
      ) : (
        <h1>bye</h1>
      )}
    </>
  );
}

export default Isloggedin;
