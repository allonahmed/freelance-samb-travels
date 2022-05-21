import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Close } from "@mui/icons-material";
import ReactPlayer from "react-player";
import landingHouse from "../../images/landinghouse.jpg";
import heroImage from "../../images/landingdemo.jpg";
import demoHills from "../../images/demohills.jpg";
import video1 from "../../images/houseimages/housevid1.mp4";
import video2 from "../../images/houseimages/housevid2.mp4";
import floor1 from "../../images/floor1.jpg";
import floor2 from "../../images/floor2.jpg";
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
        <video controls poster={floor1}>
          <source src={video1} type="video/mp4"></source>
        </video>
      </SwiperSlide>
      <SwiperSlide>
        {/* <ReactPlayer autoplay={true} url={video1} controls={true} /> */}
        <video controls poster={floor2}>
          <source src={video2} type="video/mp4"></source>
        </video>
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
