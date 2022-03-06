import React from "react";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { HashLink } from "react-router-hash-link";
import { WindupChildren, Pace, Pause, Effect } from "windups";

import "../../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <WindupChildren>
          <Pace ms={75}>
            <span className="green large">{"D"}</span>
            {"akar"} <span className="yellow large">{"T"}</span>
            {"ravels"}{" "}
          </Pace>
        </WindupChildren>
        <StarIcon className="star-icon" />
      </div>
      <div className="navigation">
        <HashLink to="/#info" className="nav-item nav-item1">
          Info
        </HashLink>
        <div className="language-dropdown nav-item nav-item2">
          Eng <KeyboardArrowDownIcon />
        </div>
        <HashLink className="nav-item important-link" to="/#book">
          Book
        </HashLink>
      </div>
    </div>
  );
};

export default Header;
