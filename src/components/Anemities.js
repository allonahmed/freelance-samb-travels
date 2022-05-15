import React, { useState } from "react";

import {
  DryCleaning,
  Kitchen,
  CellWifi,
  Tv,
  AcUnit,
  LocalParking,
  LocalDining,
  TravelExplore,
  SoupKitchen,
  CleaningServices,
  Check,
  Add,
  Security
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, Controller, Autoplay } from "swiper";

import "swiper/css/thumbs";
import "swiper/css";
import "../styles/anemities.css";

const data = [
  {
    title: "Wifi",
    icon: <CellWifi className="icon" />,
    desciption: "Umlimited access to internet connection"
  },
  {
    title: "Kitchen",
    icon: <Kitchen className="icon" />,
    desciption: "Full access to open kitchen",
    type: "free"
  },
  {
    title: "Air Conditioning",
    icon: <AcUnit className="icon" />,
    desciption: "Air conditioning included in every room",
    type: "free"
  },
  {
    title: "Cleaning Service",
    icon: <DryCleaning className="icon" />,
    desciption: "All rooms cleaned before and after stay",
    type: "free"
  },
  {
    title: "Television",
    icon: <Tv className="icon" />,
    desciption: "Full access to smart TVs",
    type: "free"
  },
  {
    title: "Parking",
    icon: <LocalParking className="icon" />,
    desciption: "Plenty of room for free parking",
    type: "free"
  },
  {
    title: "Security",
    icon: <Security className="icon" />,
    desciption: "House equipped with security systems",
    type: "free"
  },
  {
    title: "Personal Chef",
    icon: <SoupKitchen className="icon" />,
    desciption: "Personal chef access for breakfast and dinner",
    type: "paid"
  },
  {
    title: "Tour Guide",
    icon: <TravelExplore className="icon" />,
    desciption: "Explore the city with certified travel guide",
    type: "paid"
  },

  {
    title: "Cooking Lessons",
    icon: <LocalDining className="icon" />,
    desciption: "Access in-house Senegalese cooking lessons",
    type: "paid"
  }
];
const Anemities = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [active, setActive] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="anemities-container" id="anemities">
      <h3 className="underline" style={{ "--bg": "white" }}>
        Anemities
      </h3>
      <Swiper
        autoplay={{
          delay: "3000",
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        modules={[Thumbs, Navigation, Controller, Autoplay]}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="anemities-swiper"
        centeredSlides={true}
        slidesPerView={3}
        onSlideChange={() => {
          if (controlledSwiper) setActive(controlledSwiper.activeIndex);
        }}
        threshold="10000px"
        onSwiper={setControlledSwiper}
        controller={{ control: controlledSwiper }}
      >
        {data.map((ele, id) => {
          return (
            <SwiperSlide key={id}>
              {ele.icon}
              <div
                className="icon-description"
                style={
                  controlledSwiper
                    ? active === id
                      ? { display: "flex" }
                      : { display: "none" }
                    : {}
                }
              >
                <h2> {ele.title}</h2>
                <p> {ele.desciption}</p>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="legend">
          <div className="legend-items">
            <Check className="icons" style={{ color: "#00853f" }} /> Free with
            rental
          </div>
          <div className="legend-items">
            <Add className="icons" style={{ color: "#e31b23" }} /> With
            additional purchase
          </div>
        </div>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={10}
        modules={[Navigation, Thumbs]}
        className="anemities-thumb-swiper"
      >
        {data.map((ele, id) => {
          return (
            <SwiperSlide key={id}>
              {ele.icon}
              {ele.type === "paid" ? (
                <Add className="icons" style={{ color: "#e31b23" }} />
              ) : (
                <Check className="icons" style={{ color: "#00853f" }} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Anemities;
