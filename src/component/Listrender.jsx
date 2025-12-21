import React from "react";

const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];
function Listrender() {
  return (
    <div>
      {fruits.map((prop) => (
        <li key={prop.id}>{prop.name}</li>
      ))}
    </div>
  );
}

export default Listrender;
