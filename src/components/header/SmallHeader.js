import React, { useState } from "react";
import { WindupChildren, Pace, Pause, Effect } from "windups";
import { Star, ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "../../styles/header.css";

const color = ["#00853f", "#fdef42", "#e31b23"];
const SmallHeader = ({ cr, bg, border, full }) => {
  const [scrollY, setScoll] = useState(0);
  return (
    <div className="small-header">
      {" "}
      <Link
        to="/"
        className="logo"
        style={
          scrollY >= 100
            ? { color: "rgb(1,1,1)", "--bg": color[0] }
            : { color: cr, "--bg": color[0] }
        }
      >
        <WindupChildren>
          <Pace ms={75}>
            <span className="green large">{"D"}</span>
            <span className="small" style={{ "--bg": color[2] }}>
              {"akar"}
            </span>{" "}
            <span className="yellow large">{"T"}</span>
            <span className="small" style={{ "--bg": color[1] }}>
              {"ravels"}
            </span>{" "}
          </Pace>
        </WindupChildren>
        <Star className="star-icon" />
      </Link>
      <div className="book">
        <Link
          className="nav-item important-link nav-back"
          to="/"
          style={
            scrollY >= 100
              ? { color: "rgb(1,1,1)", "--bg": color[2] }
              : { color: cr, "--bg": color[2] }
          }
        >
          Back <ArrowForward sx={{ color: "#010101", fontSize: "18px" }} />
        </Link>
      </div>
    </div>
  );
};

export default SmallHeader;
