import { useEffect } from "react";

function MovieAPI() {
  // const API_KEY = import.meta.env.VITE_TASTEDIVE_KEY;

  useEffect(() => {
    fetch(`https://potterapi-fedeperin.vercel.app/en/books
`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return <div></div>;
}

export default MovieAPI;
