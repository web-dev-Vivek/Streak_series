import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Vivek" },
  { id: 2, name: "Aman" },
  { id: 3, name: "Rahul" },
];

function Users() {
  return (
    <div>
      <h2 className="text-white">User List</h2>
      {users.map((user) => (
        <p className="text-white" key={user.id}>
          <Link className="text-white" to={`/user/${user.id}`}>
            {user.name}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default Users;
