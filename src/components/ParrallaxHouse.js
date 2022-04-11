import { DisplaySettings } from "@mui/icons-material";
import React from "react";
import { Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from "swiper/react";

import background from "../images/backgroundgallery.jpg";
import "../styles/housegallery.css";

const ParallaxHouse = () => {
  return (
    <div className="house-container">
      <Parallax strength={300} bgImage={background}>
        <div className="lighten">
          <h2>About Dakar's Rental</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Click{" "}
            <a>here</a> for directions
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxHouse;
