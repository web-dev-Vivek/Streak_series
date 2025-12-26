import "./App.css";
import Form from "./component/Form";
import USEEFFECT from "./component/USEEFFECT";
function increaseCount() {
  console.log("button clicked");
}
function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <Form />
      <USEEFFECT />
    </div>
  );
}

export default App;
