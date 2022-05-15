import React, { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CollectionsIcon from "@mui/icons-material/Collections";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import { Spain, USA, France, Senegal } from "../../images/flags/flags";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { WindupChildren, Pace, Pause, Effect } from "windups";
import useWindowDimensions from "../../assets/windowDimensions";

import "../../styles/header.css";
import Nav from "./Nav";

const color = ["#00853f", "#fdef42", "#e31b23"];

const Header = ({ cr, bg, border, full }) => {
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [openNav, setNav] = useState(false);
  const [scrollY, setScoll] = useState(0);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > 900) setNav(false);
  }, [width]);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScoll(window.scrollY);
      setNav(false);
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
          : {
              background: openNav ? "rgb(248,248,248)" : "transparent",
              color: openNav ? "black" : cr,
              borderBottom: openNav ? "1px solid black" : border
            }
      }
    >
      <Nav
        styling={
          openNav === true
            ? { display: "flex", transform: "translate(0,0)" }
            : { transform: "translate(-100%,0)" }
        }
      />

      <Link
        to="/"
        className="logo"
        style={
          scrollY >= 100
            ? { color: "rgb(1,1,1)", "--bg": color[0] }
            : { color: openNav ? "black" : cr, "--bg": color[0] }
        }
      >
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
        <StarIcon className="star-icon" />
      </Link>
      <div className="smaller-logo" style={{ "--bg": color[1] }}>
        <WindupChildren>
          <Pace ms={75}>
            <span className="green large">{"S"}</span>
            <StarIcon className="star-icon" />
            <span className="yellow large">{"T"}</span>
          </Pace>
        </WindupChildren>
      </div>
      <div className="dropdown-nav">
        {openNav ? (
          <ArrowBackIosIcon
            className="menu-icon"
            onClick={() => setNav(!openNav)}
            sx={{ color: "rgba(70,70,70,.8)" }}
          />
        ) : (
          <MenuIcon className="menu-icon" onClick={() => setNav(!openNav)} />
        )}
      </div>
      <div className="navigation">
        <div
          className="language-container"
          onMouseEnter={() => setClicked1(true)}
          onMouseLeave={() => setClicked1(false)}
          onClick={() => setClicked1(!clicked1)}
        >
          <div
            className={
              clicked1
                ? "language-dropdown nav-item nav-item2 background-nav"
                : "language-dropdown nav-item nav-item2"
            }
            style={
              scrollY >= 100
                ? { color: "rgb(1,1,1)", "--bg": color[0] }
                : {
                    color: clicked1 ? "black" : cr,
                    "--bg": color[0]
                    // background: clicked1 ? "#f8f8f8" : "none"
                  }
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
              to="/#attractions"
              className="dropdown-item "
              style={{ "--bg": "black" }}
              scrolloffset="100"
            >
              {" "}
              <TravelExploreIcon
                className="feature-icon"
                sx={{ color: "#00853f" }}
              />
              Explore
            </HashLink>
            <HashLink
              to="/#anemities"
              className="dropdown-item "
              style={{ "--bg": "black" }}
            >
              <SettingsAccessibilityIcon
                className="feature-icon"
                sx={{ color: "#b0a500", textShadow: "0 0 2px #000000" }}
              />
              Anemities
            </HashLink>
            <HashLink
              to="/#house"
              className="dropdown-item "
              style={{ "--bg": "black" }}
            >
              <CollectionsIcon
                className="feature-icon"
                sx={{ color: "#e31b23" }}
              />
              Gallery
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
          className="nav-item nav-item2 contact"
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
            className={
              clicked
                ? "language-dropdown nav-item nav-item2 background-nav"
                : "language-dropdown nav-item nav-item2"
            }
            style={
              scrollY >= 100
                ? { color: "rgb(1,1,1)", "--bg": color[2] }
                : { color: clicked ? "black" : cr, "--bg": color[2] }
            }
          >
            {" "}
            <LanguageIcon className="language-icon" />{" "}
            <p style={{ padding: "2px" }}> English</p>{" "}
            {clicked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </div>
          <div
            className="dropdown-content"
            style={clicked ? { display: "flex" } : { display: "none" }}
          >
            <div className="dropdown-item" style={{ "--bg": "black" }}>
              <img
                src={France}
                alt="flag for language change"
                className="flag-images"
              />
              French
            </div>
            <div className="dropdown-item" style={{ "--bg": "black" }}>
              <img
                src={Senegal}
                alt="flag for language change"
                className="flag-images"
              />
              Senegal
            </div>
            <div className="dropdown-item " style={{ "--bg": "black" }}>
              <img
                src={Spain}
                alt="flag for language change"
                className="flag-images"
              />
              Spanish
            </div>
          </div>
        </div>
      </div>
      <div className="book">
        <Link
          className=" important-link "
          to="/book"
          style={
            scrollY >= 100
              ? { color: "black", "--bg": color[2] }
              : { color: openNav ? "black" : "white", cr, "--bg": color[2] }
          }
        >
          Book
        </Link>
      </div>
    </div>
  );
};

export default Header;
