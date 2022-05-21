import React, { useState } from "react";
import { Parallax } from "react-parallax";
import background from "../images/backgroundgallery.jpg";
import "../styles/housegallery.css";
import LandingGallery from "./landing/LandingGallery";
import {
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  house7,
  house9,
  house10,
  house11,
  house12,
  house13,
  house14,
  house15,
  house16
} from "../images/houseimages/houseimages";
import { PortalWithState } from "react-portal";
import getWindowDimensions from "../assets/windowDimensions";
import { Link } from "react-router-dom";

const images = [
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  house7,
  house9,
  house10,
  house11,
  house12,
  house13,
  house14,
  house15,
  house16
];

const r1 = parseInt(Math.random() * (14 - 1) + 1);
const r2 = parseInt(Math.random() * (14 - 1) + 1);
const r3 = parseInt(Math.random() * (14 - 1) + 1);
const r4 = parseInt(Math.random() * (14 - 1) + 1);
const r5 = parseInt(Math.random() * (14 - 1) + 1);

const ParallaxHouse = () => {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(0);
  const { width, height } = getWindowDimensions();
  console.log(width);

  return (
    <div className="house-container" id="house">
      <Parallax strength={300} bgImage={background}>
        <div className="lighten">
          <div className="house-content">
            <div className="gallery-container">
              <img
                className="home-slider-image"
                src={images[r1]}
                style={{ transform: "rotate(3deg)" }}
              />
              <img
                className="home-slider-image"
                src={images[r2]}
                style={{ transform: "rotate(7.5deg)" }}
              />
              <img
                className="home-slider-image"
                src={images[r3]}
                style={{ transform: "rotate(0deg)" }}
              />
              <img
                className="home-slider-image"
                src={images[r4]}
                style={{ transform: "rotate(-3deg)" }}
              />
              <PortalWithState
                closeOnOutsideClick
                closeOnEsc
                node={document && document.getElementById("modal")}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
              >
                {({ openPortal, closePortal, isOpen, portal }) => (
                  <React.Fragment>
                    <img
                      className="home-slider-image last"
                      id="last"
                      src={images[r5]}
                      style={
                        hovered
                          ? {
                              transform: "rotate(-7.5deg)",
                              filter: "grayscale(1)"
                            }
                          : { transform: "rotate(-7.5deg)" }
                      }
                      onMouseEnter={() => {
                        setHovered(true);
                      }}
                      onMouseLeave={() => {
                        setHovered(false);
                      }}
                      onClick={openPortal}
                    />
                    <div
                      className={hovered ? "hovered-gallery" : "click-gallery"}
                      // style={{ transform: "rotate(-7.5deg)" }}
                      onMouseEnter={() => {
                        setHovered(true);
                      }}
                      onMouseLeave={() => {
                        setHovered(false);
                      }}
                      onClick={openPortal}
                    >
                      View Gallery
                    </div>
                    {portal(
                      <LandingGallery
                        onClose={closePortal}
                        gallery={images}
                        width={width}
                      />
                    )}
                  </React.Fragment>
                )}
              </PortalWithState>
            </div>
            <div className="house-info">
              <h2>About Samb's Villa</h2>
              <p>
                The luxurious villa of Amy is located in Cambérène, one of the
                19 neighborhoods in the Capital of Dakar, Senegal. This villa is
                walking steps of the Atlantic Ocean with a beautiful view.
                Easily accessible by the auto route of the VDN which takes you
                the heart of the city in 12-19mins depending on the traffic. In
                addition a 49 min drive to the Blaise Dianne international
                airport(51km). One of the main zones of attraction ( la Corniche
                Ouest) which is 14 mins. On the east side ( la Corniche Est )
                you have the centre of the city which is 13 minutes away by car.
              </p>

              <Link to="/book" className="house-book-now">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxHouse;
