import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://potterapi-fedeperin.vercel.app/en/books
`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ThemeContext.Provider value={{ data }}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
