import React from "react";

function Usercard({ username, email, age, income, top }) {
  return (
    <div>
      <div
        className={`border-2 w-3/5 max-w-4xl min-w-0 m-${top} mx-4 p-6 rounded-lg shadow-lg bg-white`}
      >
        <h1 className="text-xl font-semibold">{username}</h1>
        <p className="text-sm">Email: {email}</p>
        <p className="text-sm">Age: {age}</p>
        <p className="text-sm">Income: {income}</p>
      </div>
    </div>
  );
}

export default Usercard;
