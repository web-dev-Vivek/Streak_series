import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Detail Page</h2>
      <p className="text-white">User ID: {id}</p>
    </div>
  );
}

export default UserDetail;
