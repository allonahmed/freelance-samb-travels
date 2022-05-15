import React, { useState } from "react";

const TourCard = ({ id, t }) => {
  const [hovered, setHovered] = useState(false);
  const [imageHover, setImageHover] = useState(false);
  return (
    <div
      className="attraction-cards"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="attraction-details">
        <h5 className="attraction-title">{t.title}</h5>
        <p className="attraction-description">{t.description}</p>
      </div>
      <img
        className="attraction-images"
        src={t.image}
        style={
          id === 2 ? { objectPosition: "top" } : { objectPosition: "bottom" }
        }
      />
      <a
        className="card-overlay"
        onMouseEnter={() => setImageHover(true)}
        onMouseLeave={() => setImageHover(false)}
        href={t.link}
        target="_blank"
        style={
          hovered
            ? {
                backgroundColor: "rgba(104, 118, 104, 0.21)",
                textShadow: "0 0 8px black",
                fontSize: "19px"
              }
            : {
                backgroundColor: "rgba(104, 118, 104, 0.661)",
                textShadow: "none",
                fontSize: "16px"
              }
        }
      >
        {" "}
        <p className={imageHover ? "hovered" : "attraction-link"}>Read More</p>
      </a>
    </div>
  );
};

export default TourCard;
