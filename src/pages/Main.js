import Landing from "../components/landing/Landing";
import Offers from "../components/Offers";
import Anemities from "../components/Anemities";
import ParallaxHouse from "../components/ParrallaxHouse";
import "../App.css";
import Header from "../components/header/Header";

function Main() {
  return (
    <div className="App">
      <Header cr="rgb(255,255,255)" bg="none" full={true} />
      <Landing />
      <Offers />
      <ParallaxHouse />
      <Anemities />
      <div style={{ height: "100vh", background: "black" }}></div>
    </div>
  );
}

export default Main;
