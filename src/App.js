import Header from "./components/header/Header";
import "./App.css";
import Landing from "./components/landing/Landing";
import Offers from "./components/Offers";
import Anemities from "./components/Anemities";
import ParallaxHouse from "./components/ParrallaxHouse";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Offers />
      <ParallaxHouse />
      <Anemities />
      <div style={{ height: "100vh", background: "black" }}></div>
    </div>
  );
}

export default App;
