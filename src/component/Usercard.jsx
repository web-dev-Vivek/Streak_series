import React from "react";

function Usercard({ username, email, age, income }) {
  return (
    <div>
      <div className={`border-2 max-w-4xl mx-4 rounded-lg shadow-lg bg-white`}>
        <h1 className="text-xl font-semibold">{username}</h1>
        <p className="text-sm">Email: {email}</p>
        <p className="text-sm">Age: {age}</p>
        <p className="text-sm">Income: {income}</p>
      </div>
    </div>
  );
}

export default Usercard;
