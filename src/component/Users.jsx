import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Users() {
  const { Theme, toggleTheme } = useContext(ThemeContext);
  const users = [
    { id: 1, name: "Vivek" },
    { id: 2, name: "Aman" },
    { id: 3, name: "Rahul" },
  ];

  return (
    <div
      style={{ background: Theme === "light" ? "#fff" : "#333" }}
      className="p-4 rounded"
    >
      <h2 style={{ color: Theme === "light" ? "#000" : "#fff" }}>User List</h2>
      {users.map((user) => (
        <p style={{ color: Theme === "light" ? "#000" : "#fff" }} key={user.id}>
          <Link
            style={{ color: Theme === "light" ? "#000" : "#fff" }}
            to={`/user/${user.id}`}
          >
            {user.name}
          </Link>
        </p>
      ))}
      <button onClick={toggleTheme}>
        Switch to {Theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
}

export default Users;
