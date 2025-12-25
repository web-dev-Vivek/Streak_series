import HEADER from "./component/header";
import Footer from "./component/Footer";
import IsloggedIn from "./component/isloggedin";
import Usercard from "./component/Usercard";
import Listrender from "./component/Listrender";
import Wrapper from "./component/wrapper";
import Hero from "./component/hero";
import "./App.css";

function increaseCount() {
  console.log("button clicked");
}
function App() {
  return (
    <>
      <HEADER />

      <Hero />
      {/* <Footer /> */}
    </>
  );
}

export default App;
