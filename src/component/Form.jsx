import React, { useState } from "react";
import Propschildren from "./Propschildren";

function Form() {
  const [stage, setstage] = useState(1);
  const [User, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setUser({ ...User, [name]: value });
  }

  function handleSubmit() {
    setstage(stage + 1);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <Propschildren>
        <h1>{User.name}</h1>
        <h1>{User.email}</h1>
        <h1>{User.password}</h1>
      </Propschildren>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Step indicator */}
        <p className="text-sm text-gray-500 mb-2">Step {stage} of 3</p>

        {/* Stage 1 */}
        {stage === 1 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Your Name
            </h2>

            <input
              className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              name="name"
              value={User.name}
              onChange={handlechange}
            />

            <button
              onClick={handleSubmit}
              disabled={!User.name}
              className={`w-full py-3 rounded-lg text-white font-medium transition
                ${
                  User.name
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Submit
            </button>
          </>
        )}

        {/* Stage 2 */}
        {stage === 2 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Your Email
            </h2>

            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              name="email"
              value={User.email}
              onChange={handlechange}
            />

            <button
              onClick={handleSubmit}
              disabled={!User.email.includes("@")}
              className={`w-full py-3 rounded-lg text-white font-medium transition
                ${
                  User.email.includes("@")
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Submit
            </button>
          </>
        )}

        {/* Stage 3 */}
        {stage === 3 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Create Password
            </h2>

            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              name="password"
              value={User.password}
              onChange={handlechange}
            />

            <button
              disabled={!User.password}
              className={`w-full py-3 rounded-lg text-white font-medium transition
                ${
                  User.password
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Form;
