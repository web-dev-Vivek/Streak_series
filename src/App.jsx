import HEADER from "./component/header";
import Footer from "./component/Footer";
import IsloggedIn from "./component/isloggedin";
import Listrender from "./component/Listrender";
import Wrapper from "./component/wrapper";
import "./App.css";

function App() {
  return (
    <>
      <IsloggedIn isloggedin={true} />
      <HEADER />
      <wrapper>
        <h1>hey! bro how are you</h1>
      </wrapper>
      <Footer />
      <Listrender />
    </>
  );
}

export default App;
