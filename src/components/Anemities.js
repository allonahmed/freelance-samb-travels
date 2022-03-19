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
  Add
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, Controller } from "swiper";

import "swiper/css/thumbs";
import "swiper/css";
import "../styles/anemities.css";

const data = [
  {
    title: "Wifi",
    icon: <CellWifi className="icon" />,
    desciption: "Unlimited access to wifi"
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
    desciption: "AC unit available",
    type: "free"
  },
  {
    title: "Cleaning Service",
    icon: <DryCleaning className="icon" />,
    desciption: "Cleaning service",
    type: "free"
  },
  {
    title: "Television",
    icon: <Tv className="icon" />,
    desciption: "Full access to television",
    type: "free"
  },
  {
    title: "Free Parking",
    icon: <LocalParking className="icon" />,
    desciption: "Free parking available",
    type: "free"
  },
  {
    title: "Personal Chef",
    icon: <SoupKitchen className="icon" />,
    desciption: "Access to personal chef",
    type: "paid"
  },
  {
    title: "Tour Guide",
    icon: <TravelExplore className="icon" />,
    desciption: "Explore city with travel guide",
    type: "paid"
  },
  {
    title: "Cleaning Service",
    icon: <CleaningServices className="icon" />,
    desciption: "Maid service",
    type: "paid"
  },
  {
    title: "Cooking Lessons",
    icon: <LocalDining className="icon" />,
    desciption: "Personal Chef teaches cooking classes",
    type: "paid"
  }
];
const Anemities = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [active, setActive] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="anemities-container">
      <h3 className="underline" style={{ "--bg": "white" }}>
        Anemities
      </h3>
      <Swiper
        modules={[Thumbs, Navigation, Controller]}
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
              <p
                style={
                  controlledSwiper
                    ? active === id
                      ? { display: "flex" }
                      : { display: "none" }
                    : {}
                }
              >
                {ele.type === "paid" ? (
                  <Add className="icon" style={{ color: "#e31b23" }} />
                ) : (
                  <Check className="icon" style={{ color: "#00853f" }} />
                )}{" "}
                {ele.desciption}
              </p>
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
          return <SwiperSlide key={id}>{ele.icon}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Anemities;
