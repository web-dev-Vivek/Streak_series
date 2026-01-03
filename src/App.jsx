import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./component/Form";
import USEEFFECT from "./component/USEEFFECT";
import UseRef from "./component/UseRef";
import TodoList from "./component/TodoList";
import Fetching from "./component/Fetching";
import Users from "./component/Users";
import UserDetail from "./component/UserDetail";

function App() {
  function increaseCount() {
    console.log("button clicked");
  }
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
