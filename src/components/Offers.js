import React from "react";
import chef from "../images/chef.svg";
import house from "../images/house.svg";
import beach from "../images/beach.svg";
import { HashLink } from "react-router-hash-link";
import "../styles/offers.css";

const cards = [
  {
    image: house,
    title: "Luxary Villa",
    details:
      "Our luxorious, two story home is equipped with an open kitchen, media room, and patio in the heart of Senegal.",
    link: "/#home"
  },

  {
    image: beach,
    title: "Amazing attractions",
    details:
      "Located in the heart of Senegal, you will find many great adventures nearby, such as the beach which is in walking distance.",
    link: "/#attractions"
  },
  {
    image: chef,
    title: "Personal Chef",
    details:
      "We offer a personal chef that can both cook and provide cooking lessons to take home with you.",
    link: "/#chef"
  }
];

const Offers = () => {
  return (
    <div className="offers-container">
      <div className="offers-intro">
        <h2>Why Choose</h2>
        <h1>Dakar AirBnB</h1>
        <p>
          {" "}
          We have a superb selection of exotic, unusual properties that are hard
          to categorize but which are undoubtedly distinct and pleasant.
        </p>
      </div>
      <div className="card-container">
        {cards.map((card, id) => {
          return (
            <div className="card" key={id}>
              <img src={card.image} />
              <h3>{card.title}</h3>
              <p>{card.details}</p>
              <HashLink className="underline" to={card.link}>
                Read More{" "}
              </HashLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
