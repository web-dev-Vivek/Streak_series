import React from "react";

function Usercard({ username, email, age, income }) {
  return (
    <>
      <h1>{username}</h1>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Income: {income}</p>
    </>
  );
}

export default Usercard;
