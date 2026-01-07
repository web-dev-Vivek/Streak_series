import { ThemeContext } from "../context/ThemeProvider.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

function MovieAPI() {
  const { data } = useContext(ThemeContext);
  console.log({ data });
  return (
    <div>
      {data.map((hey) => {
        return (
          <div key={hey.id}>
            <Link to={`/${hey.number}`}>{hey.title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default MovieAPI;
