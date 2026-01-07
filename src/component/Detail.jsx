import React from "react";
import { ThemeContext } from "../context/ThemeProvider.jsx";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { number } = useParams();
  const { data } = useContext(ThemeContext);
  const movie = data.find((item) => item.number === Number(number));
  if (!movie) {
    return <div>Movie not found</div>;
  }
  return <div>{movie.title}</div>;
}

export default Detail;
