import Landing from "../components/landing/Landing";
import Offers from "../components/Offers";
import Anemities from "../components/Anemities";
import ParallaxHouse from "../components/ParrallaxHouse";
import "../App.css";
import Header from "../components/header/Header";
import PersonalChef from "../components/PersonalChef";
import Attractions from "../components/Attractions";
import Contact from "../components/Contact";

function Main() {
  return (
    <div className="App">
      <Header cr="rgb(255,255,255)" bg="none" full={true} />
      <Landing />
      <Offers />
      <ParallaxHouse />
      <Anemities />
      <PersonalChef />
      <Attractions />
      <Contact />
    </div>
  );
}

export default Main;
