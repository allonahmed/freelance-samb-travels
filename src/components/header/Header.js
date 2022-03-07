import React from "react";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import { HashLink } from "react-router-hash-link";
import { WindupChildren, Pace, Pause, Effect } from "windups";

import "../../styles/header.css";
const color = ["#00853f", "#fdef42", "#e31b23"];

const Header = () => {
  return (
    <div className="header">
      <div className="logo" style={{ "--bg": color[1] }}>
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
        <StarIcon className="star-icon" />
      </div>
      <div className="navigation">
        <HashLink
          to="/#info"
          style={{ "--bg": color[0] }}
          className="nav-item nav-item1"
        >
          Features
        </HashLink>
        <HashLink
          to="/#info"
          style={{ "--bg": color[1] }}
          className="nav-item nav-item1"
        >
          Contact Us
        </HashLink>
        <div
          className="language-dropdown nav-item nav-item2"
          style={{ "--bg": color[2] }}
        >
          <LanguageIcon /> <p style={{ padding: "2px" }}>Eng</p>{" "}
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="book">
        <HashLink
          className="nav-item important-link"
          to="/#book"
          style={{ "--bg": color[2] }}
        >
          Book
        </HashLink>
      </div>
    </div>
  );
};

export default Header;
