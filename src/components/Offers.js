import React from "react";
import chef from "../images/chef.svg";
import house from "../images/house.svg";
import beach from "../images/beach.svg";
import { HashLink } from "react-router-hash-link";
import { WindupChildren, Pace, Pause, Effect } from "windups";
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
    title: "Attractions",
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
        <h2>
          <WindupChildren>
            <Pace ms={40}>Why Choose</Pace>
          </WindupChildren>
        </h2>
        <h1>
          {" "}
          <WindupChildren>
            <Pace ms={40}>
              {" "}
              <Pause ms={600} />
              Samb AirBnB
            </Pace>
          </WindupChildren>
        </h1>
        <p>
          <WindupChildren>
            <Pace ms={20}>
              {" "}
              <Pause ms={1200} />
              We offer a beautiful villa in a desirable neighborhood in Dakar,
              Senegal that will make your visit confortable and unforgetable.
            </Pace>
          </WindupChildren>
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
