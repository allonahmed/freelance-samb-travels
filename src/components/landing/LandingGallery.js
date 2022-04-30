import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Close } from "@mui/icons-material";

import landingHouse from "../../images/landinghouse.jpg";
import heroImage from "../../images/landingdemo.jpg";
import demoHills from "../../images/demohills.jpg";

import "swiper/css";
import "swiper/css/navigation";

// const images = [landingHouse, heroImage, demoHills];

const LandingGallery = ({ onClose, gallery }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {gallery.map((image, id) => {
        return (
          <SwiperSlide key={id}>
            {" "}
            <img src={image} alt={`landing page galllery photo ${id + 1}`} />
            <Close className="close-icon" onClick={onClose} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default LandingGallery;
