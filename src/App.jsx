import "./App.css";
import Form from "./component/Form";

function increaseCount() {
  console.log("button clicked");
}
function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <Form />
    </div>
  );
}

export default App;
