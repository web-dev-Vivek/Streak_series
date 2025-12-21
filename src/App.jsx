import HEADER from "./component/header";
import Footer from "./component/Footer";
import Usercard from "./component/Usercard";
import "./App.css";

function App() {
  return (
    <>
      <Usercard
        username="Vivek jha"
        email="progamervivek2020@gmail.com"
        age={20}
        income={0}
      />
      <HEADER />

      <Footer />
    </>
  );
}

export default App;
