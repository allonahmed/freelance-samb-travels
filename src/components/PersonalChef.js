import React from "react";
import { knives } from "../images/images";
import { Parallax } from "react-parallax";
import bgcook from "../images/bgcook.jpg";

import "../styles/chef.css";
import { Link } from "@mui/material";
import { HashLink } from "react-router-hash-link";
const PersonalChef = () => {
  return (
    <div className="chef-page" id="chef">
      <Parallax strength={300} bgImage={bgcook}>
        <div className="lighten">
          <div className="chef-container">
            <div className="chef-content">
              <div className="chef-details">
                <div className="chef-title">Personal Chef</div>
                <p>
                  When you rent your stay at Dakar's BnB (for an additional
                  fee), you never have to worry about cooking during your stay!
                  We offer an in house personal chef to cook breakfast and
                  dinner for the duration of your stay. Our personal chef is
                  versatile. Whether you want your favorite comfort meal or you
                  want a native Senegalese cuisine, our chef has you covered! In
                  addition, if you want to learn how to make some of our
                  cultural cuisines such as our Jollof rice , Fataya , Thiakry,
                  we offer cooking lessons so you can go home with a piece of
                  Dakar! If there are any dietary restrictions we should know
                  about, please{" "}
                  <HashLink to="/#contact" style={{ color: "white" }}>
                    {" "}
                    contact us!
                  </HashLink>
                </p>
                <Link to="/book" className="chef-book-now">
                  Book Now
                </Link>
              </div>
              <div className="chef-gallery-container">
                <img className="chef-image" src={knives} />
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default PersonalChef;
