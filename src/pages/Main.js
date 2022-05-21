import Landing from "../components/landing/Landing";
import Offers from "../components/Offers";
import Anemities from "../components/Anemities";
import ParallaxHouse from "../components/ParrallaxHouse";
import "../App.css";
import Header from "../components/header/Header";
import PersonalChef from "../components/PersonalChef";
import Attractions from "../components/Attractions";
import Contact from "../components/Contact";
import React, { useRef, useEffect } from "react";
import video1 from "../images/houseimages/FirstFloor.mov";
import video2 from "../images/houseimages/SecondFloor.mov";

function Main() {
  // const videoRef = useRef(undefined);
  // useEffect(() => {
  //   videoRef.current.defaultMuted = true;
  // });
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
