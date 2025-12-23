import HEADER from "./component/header";
import Footer from "./component/Footer";
import IsloggedIn from "./component/isloggedin";
import Listrender from "./component/Listrender";
import Wrapper from "./component/wrapper";
import "./App.css";

function increaseCount() {
  console.log("button clicked");
}
function App() {
  return (
    <>
      <IsloggedIn isloggedin={true} />
      <HEADER />
      <Wrapper>
        <h1>hey! bro how are you</h1>
      </Wrapper>

      <Footer />
      <button onClick={increaseCount}>Increase Count</button>

      <Listrender />
    </>
  );
}

export default App;
