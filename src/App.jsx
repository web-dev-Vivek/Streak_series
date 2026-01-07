import React from "react";
import MovieAPI from "./component/MovieAPI.jsx";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import { useContext } from "react";
import Detail from "./component/Detail.jsx";

function App() {
  const { data } = useContext(ThemeContext);
  return (
    <Routes>
      <Route path="/" element={<MovieAPI />} />
      <Route path={`/:number`} element={<Detail />} />
    </Routes>
  );
}

export default App;
