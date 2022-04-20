import React from "react";
import { knives } from "../images/images";

import "../styles/chef.css";
const PersonalChef = () => {
  return (
    <div className="chef-container">
      <div className="chef-title">Personal Chef</div>
      <div className="chef-content">
        <img className="chef-image" src={knives} />
        <div className="chef-details">
          <p>
            When you rent your stay at Dakar BnB, for an additional fee, you
            never have to worry about cooking during your stay
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalChef;
