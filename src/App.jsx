import HEADER from "./component/header";
import Footer from "./component/Footer";
import IsloggedIn from "./component/isloggedin";
import "./App.css";

function App() {
  return (
    <>
      <IsloggedIn isloggedin={true} />
      <HEADER />

      <Footer />
    </>
  );
}

export default App;
