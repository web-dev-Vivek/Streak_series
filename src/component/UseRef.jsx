import React from "react";
import { useRef } from "react";

function UseRef() {
  const elemRef = useRef(null);
  function Focus() {
    elemRef.current.focus();
  }
  return (
    <div>
      <input ref={elemRef} type="text" />
      <button onClick={Focus}>Focus mode on</button>
    </div>
  );
}

export default UseRef;
