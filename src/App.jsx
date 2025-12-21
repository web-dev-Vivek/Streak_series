import HEADER from "./component/header";
import Footer from "./component/Footer";
import IsloggedIn from "./component/isloggedin";
import Listrender from "./component/Listrender";
import "./App.css";

function App() {
  return (
    <>
      <IsloggedIn isloggedin={true} />
      <HEADER />

      <Footer />
      <Listrender />
    </>
  );
}

export default App;
