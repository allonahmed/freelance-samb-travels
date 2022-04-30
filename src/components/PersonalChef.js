import React from "react";
import { knives } from "../images/images";
import { Parallax } from "react-parallax";
import bgcook from "../images/bgcook.jpg";

import "../styles/chef.css";
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
                  cultural cuisines such as our Jollof rice (which is renowned
                  as the best in the world) , Fataya (Empanada), Thiakry( sweet
                  cream with grains) a national favorit many other options as
                  well. we offer cooking lessons so you can go home with a piece
                  of Dakar! If there are any dietary restrictions we should know
                  about, please contact us!
                </p>
                <button className="chef-book-now">Book Now</button>
              </div>
              <img className="chef-image" src={knives} />
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default PersonalChef;
