import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Close } from "@mui/icons-material";

import video1 from "../../images/houseimages/FirstFloor.mov";
import video2 from "../../images/houseimages/SecondFloor.mov";

import "swiper/css";
import "swiper/css/navigation";

const LandingGallery = ({ onClose, gallery, width }) => {
  return (
    <Swiper
      navigation={true}
      slidesPerView={width > 900 ? 1 : "auto"}
      modules={[Navigation]}
      className="mySwiper"
      direction={width > 900 ? "horizontal" : "vertical"}
    >
      <Close className="close-icon" onClick={onClose} />
      <SwiperSlide>
        <iframe
          src="https://www.youtube.com/embed/EbRsfUAThgY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </SwiperSlide>
      <SwiperSlide>
        <iframe
          src="https://www.youtube.com/embed/sFLLN-LiEFE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </SwiperSlide>
      {gallery.map((image, id) => {
        return (
          <SwiperSlide key={id}>
            {<img src={image} alt={`landing page galllery photo ${id + 1}`} />}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default LandingGallery;
