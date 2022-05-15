import React, { useState } from "react";
import { safari, monument, goree, atvride } from "../images/images";
import "../styles/attractions.css";
import TourCard from "./TourCard";

const images = [goree, safari, monument, atvride];

const tour = [
  {
    image: goree,
    title: "Goree Island",
    description:
      "Visit Gorée Island, a tiny island island off the coast of Dakar. It is known for it's role in the 15-19th century Atlantic slave trade. You can visit and learn more about it's rich history.",
    link: "https://www.tripadvisor.com/Attraction_Review-g293831-d12918691-Reviews-Island_of_Goree-Dakar_Dakar_Region.html"
  },
  {
    image: safari,
    title: "Fathala Wildlife Reserve",
    description:
      "Ever wanted to walk with lions? Well, you can at the Fathala Wildlife Reserve. You can get a tour through the safari, walk with native animals, and even enjoy the nearby hotel anemities!",
    link: "https://www.tripadvisor.com/Attraction_Review-g3400137-d3612428-Reviews-Fathala_Reserve-Foundiougne_Fatick_Region.html"
  },
  {
    image: monument,
    title: "Renaissance Monument",
    description:
      "Personal tour to the largest monument in Africa, the African Renaissance Monument, which symbolizes the rebirth of Africa. Learn more about the 49 meter bronze statue's history.",
    link: "https://en.wikipedia.org/wiki/African_Renaissance_Monument"
  },
  {
    image: atvride,
    title: "ATV Beach Ride",
    description:
      "Ride an ATV along the shore of the nearby beaches and along the ATV course. You can enjoy the incredible views here at Dakar, while enjoying a ride on our ATVs.",
    link: "https://www.tripadvisor.com/Attractions-g293830-Activities-c61-t211-Senegal.html"
  }
];

const Attractions = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="attractions-container" id="attractions">
      <div className="attractions-header">
        <h5>Explore</h5>
        <h2>Dakar Senegal</h2>
        <p>
          While you enjoy your stay with us, there is a ton of attractions in
          the area you can check out. We even offer tour guides to assist you in
          your adventures!
        </p>
      </div>
      <div className="attraction-cards-container">
        {tour.map((t, id) => {
          return <TourCard t={t} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Attractions;
