import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Close } from "@mui/icons-material";
import ReactPlayer from "react-player/youtube";
import landingHouse from "../../images/landinghouse.jpg";
import heroImage from "../../images/landingdemo.jpg";
import demoHills from "../../images/demohills.jpg";

import "swiper/css";
import "swiper/css/navigation";

// const images = [landingHouse, heroImage, demoHills];

const LandingGallery = ({ onClose, gallery, width }) => {
  console.log(gallery);

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
        <ReactPlayer url={"https://youtu.be/sFLLN-LiEFE"} controls={true} />
      </SwiperSlide>

      <SwiperSlide>
        <ReactPlayer
          url={"https://youtu.be/EbRsfUAThgY"}
          controls={true}
          lght
        />
      </SwiperSlide>
      {gallery.map((image, id) => {
        return (
          <SwiperSlide key={id}>
            {image === "/static/media/housevid1.4de535a5147298c46b63.mov" ? (
              <ReactPlayer url={image} controls={true} />
            ) : (
              <img src={image} alt={`landing page galllery photo ${id + 1}`} />
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default LandingGallery;
