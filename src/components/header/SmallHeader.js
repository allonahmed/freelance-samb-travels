import React, { useState } from "react";
import { WindupChildren, Pace, Pause, Effect } from "windups";
import { Star, ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "../../styles/header.css";

const color = ["#00853f", "#fdef42", "#e31b23"];
const SmallHeader = ({ cr, bg, border, full }) => {
  const [scrollY, setScoll] = useState(0);
  return (
    <div className="small-header">
      <div className="small-book">
        <Link
          className="nav-back"
          to="/"
          style={
            scrollY >= 100
              ? { color: "rgb(1,1,1)", "--bg": color[2] }
              : { color: cr, "--bg": color[2] }
          }
        >
          <ArrowBack sx={{ color: "#010101", fontSize: "18px" }} />
          Back to Home
        </Link>
        <Link to="/" className="logo">
          <WindupChildren>
            <Pace ms={75}>
              <span className="green large" style={{ marginRight: "2px" }}>
                {"S"}
              </span>
              <span className="small" style={{ "--bg": color[2] }}>
                {"amb"}
              </span>{" "}
              <span className="yellow large">{"T"}</span>
              <span className="small" style={{ "--bg": color[1] }}>
                {"ravels"}
              </span>{" "}
            </Pace>
          </WindupChildren>
          <Star className="star-icon" />
        </Link>
        <div className="smaller-logo" style={{ "--bg": color[1] }}>
          <WindupChildren>
            <Pace ms={75}>
              <span className="green large">{"S"}</span>
              <Star className="star-icon" />
              <span className="yellow large">{"T"}</span>
            </Pace>
          </WindupChildren>
        </div>
      </div>
    </div>
  );
};

export default SmallHeader;
