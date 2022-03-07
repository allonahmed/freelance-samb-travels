import React, { useState, useEffect, useRef } from "react";

import landingHouse from "../../images/landinghouse.jpg";
import heroImage from "../../images/landingdemo.jpg";
import demoHills from "../../images/demohills.jpg";
import chefIll from "../../images/chef.svg";
import travelIll from "../../images/travel.svg";
import homeIll from "../../images/home.svg";

import "../../styles/landing.css";

const images = [heroImage, landingHouse, demoHills];
const color = ["#00853f", "#fdef42", "#e31b23"];

const delay = 8000;
const Landing = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    images.push(images[index]);
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="landing">
      <div className="darken"></div> {/* to darken the background image */}
      <div className="landing-slide-container">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }}
        >
          {images.map((image, index) => (
            <img className="slide" key={index} src={image} />
          ))}
        </div>
      </div>
      <div className="landing-content">
        <div
          className="content-info"
          style={{
            boxShadow: `inset 0 0 100vh 2px ${
              color[index % 3]
            }, 5px 5px 10px 5px rgba(0,0,0,.6)`
          }}
        >
          {index % 3 === 0 && (
            <div className="info">
              <h3>home</h3>
              <img
                src={homeIll}
                alt="home illustration"
                className="info-illustration"
              />
              <div className="description">
                {" "}
                In the heart of Senegal, is our beautiful two floor house open
                to anyone looking for a relaxing, luxarious vacation
              </div>
              <button className={`info-button `} style={{ "--bg": color[0] }}>
                {" "}
                Book Now
              </button>
            </div>
          )}
          {index % 3 === 1 && (
            <div className="info">
              <h3>travel</h3>
              <img
                src={travelIll}
                alt="travel illustration"
                className="info-illustration"
              />
              <div className="description">
                {" "}
                In the heart of Senegal, is our beautiful two floor house open
                to anyone looking for a relaxing, luxarious vacation
              </div>
              <button className={`info-button`} style={{ "--bg": color[1] }}>
                View Options
              </button>
            </div>
          )}
          {index % 3 === 2 && (
            <div className="info">
              <h3>cook</h3>
              <img
                src={chefIll}
                alt="cook illustration"
                className="info-illustration"
              />
              <div className="description">
                {" "}
                In the heart of Senegal, is our beautiful two floor house open
                to anyone looking for a relaxing, luxarious vacation
              </div>
              <button className={`info-button `} style={{ "--bg": color[2] }}>
                {" "}
                See more{" "}
              </button>
            </div>
          )}
          {[color[0], color[1], color[2]].map((color, idx) => (
            <div
              key={idx}
              className={`pagination${index % 3 === idx ? " active" : ""}`}
              style={{
                margin: `0 calc(-30px * ${idx - 1})`,
                background: color
              }}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
