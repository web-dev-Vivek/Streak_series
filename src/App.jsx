import "./App.css";
import Form from "./component/Form";
import USEEFFECT from "./component/USEEFFECT";
import UseRef from "./component/UseRef";

function App() {
  function increaseCount() {
    console.log("button clicked");
  }
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <Form />
      <USEEFFECT />
      <UseRef />
    </div>
  );
}

export default App;
