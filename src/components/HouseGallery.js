import React, { useState } from "react";

import "../styles/housegallery.css";

import {
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  house7,
  house8,
  house9,
  house10,
  house11,
  house12,
  house13,
  house14,
  house15
} from "../images/houseimages/houseimages";

const images = [
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  house7,
  house8,
  house9,
  house10,
  house11,
  house12,
  house13,
  house14,
  house15
];

const HouseGallery = () => {
  return (
    <div className="house-gallery-container">
      <div className="house-gallery-title">Gallery</div>
      <div className="row">
        <div className="column">
          <img src={images[0]} style={{ width: "100%" }} />
          <img src={images[11]} style={{ width: "100%" }} />
          <img src={images[6]} style={{ width: "100%" }} />
          <img src={images[14]} style={{ width: "100%" }} />
        </div>
        <div className="column">
          <img src={images[12]} style={{ width: "100%" }} />
          <img src={images[13]} style={{ width: "100%" }} />
          <img src={images[3]} style={{ width: "100%" }} />
        </div>
        <div className="column">
          <img src={images[4]} style={{ width: "100%" }} />
          <img src={images[5]} style={{ width: "100%" }} />
          <img src={images[2]} style={{ width: "100%" }} />
          <img src={images[7]} style={{ width: "100%" }} />
        </div>
        <div className="column">
          <img src={images[8]} style={{ width: "100%" }} />
          <img src={images[9]} style={{ width: "100%" }} />
          <img src={images[10]} style={{ width: "100%" }} />
          <img src={images[1]} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default HouseGallery;
