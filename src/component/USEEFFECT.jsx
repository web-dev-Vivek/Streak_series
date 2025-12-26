import React from "react";
import { useEffect } from "react";

function USEEFFECT() {
  useEffect(() => {
    console.log("USEEFFECT mounted");
  }, []);
  return (
    <div>
      <button>Click Me: UseEffect</button>
    </div>
  );
}

export default USEEFFECT;
