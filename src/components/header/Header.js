import React, { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { WindupChildren, Pace, Pause, Effect } from "windups";

import "../../styles/header.css";

const color = ["#00853f", "#fdef42", "#e31b23"];

const Header = ({ cr, bg, border, full }) => {
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [openNav, setNav] = useState(false);
  const [scrollY, setScoll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScoll(window.scrollY);
    });
  });
  return (
    <div
      className="header"
      style={
        window.scrollY >= 100
          ? {
              background: "rgb(248,248,248)",
              color: "rgb(1,1,1)",
              borderBottom: "1px solid black"
            }
          : { background: bg, color: cr, borderBottom: border }
      }
    >
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
        <StarIcon className="star-icon" />
      </Link>
      <div className="smaller-logo" style={{ "--bg": color[1] }}>
        <WindupChildren>
          <Pace ms={75}>
            <span className="green large">{"D"}</span>

            <span className="yellow large">{"T"}</span>
          </Pace>
        </WindupChildren>
        <StarIcon className="star-icon" />
      </div>
      <div className="dropdown-nav">
        <MenuIcon className="menu-icon" onClick={() => setNav(!openNav)} />
      </div>
      <div
        className="navigation"
        style={
          openNav === true
            ? { display: "flex", transform: "translate(0,0)" }
            : {}
        }
      >
        <div
          className="language-container"
          onMouseEnter={() => setClicked1(true)}
          onMouseLeave={() => setClicked1(false)}
          onClick={() => setClicked1(!clicked1)}
        >
          <div
            className="language-dropdown nav-item nav-item2"
            style={
              scrollY >= 100
                ? { color: "rgb(1,1,1)", "--bg": color[0] }
                : { color: cr, "--bg": color[0] }
            }
          >
            {" "}
            <p style={{ padding: "2px" }}>Features</p>{" "}
            {clicked1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </div>
          <div
            className="dropdown-content"
            style={clicked1 ? { display: "flex" } : { display: "none" }}
          >
            <HashLink
              to="/#house"
              className="dropdown-item nav-item"
              style={{ "--bg": "black" }}
            >
              Gallery
            </HashLink>
            <HashLink
              to="/#attractions"
              className="dropdown-item nav-item"
              style={{ "--bg": "black" }}
              scrollOffset="100"
            >
              Explore
            </HashLink>
            <HashLink
              to="/#anemities"
              className="dropdown-item nav-item"
              style={{ "--bg": "black" }}
            >
              Anemities
            </HashLink>
          </div>
        </div>
        <HashLink
          to="/#contact"
          style={
            scrollY >= 100
              ? { color: "rgb(1,1,1)", "--bg": color[1] }
              : { color: cr, "--bg": color[1] }
          }
          className="nav-item nav-item1"
        >
          Contact Us
        </HashLink>
        <div
          className="language-container"
          onMouseEnter={() => setClicked(true)}
          onMouseLeave={() => setClicked(false)}
          onClick={() => setClicked(!clicked)}
        >
          <div
            className="language-dropdown nav-item nav-item2"
            style={
              scrollY >= 100
                ? { color: "rgb(1,1,1)", "--bg": color[2] }
                : { color: cr, "--bg": color[2] }
            }
          >
            {" "}
            <LanguageIcon sx={{ fontSize: "22px" }} />{" "}
            <p style={{ padding: "2px" }}>Eng</p>{" "}
            {clicked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </div>
          <div
            className="dropdown-content"
            style={clicked ? { display: "flex" } : { display: "none" }}
          >
            <div className="dropdown-item nav-item" style={{ "--bg": "black" }}>
              French
            </div>
            <div className="dropdown-item nav-item" style={{ "--bg": "black" }}>
              Senegalese
            </div>
            <div className="dropdown-item nav-item" style={{ "--bg": "black" }}>
              Spanish
            </div>
          </div>
        </div>
      </div>
      <div className="book">
        <Link
          className="nav-item important-link"
          to="/book"
          style={
            scrollY >= 100
              ? { color: "rgb(1,1,1)", "--bg": color[2] }
              : { color: cr, "--bg": color[2] }
          }
        >
          Book
        </Link>
      </div>
    </div>
  );
};

export default Header;
