import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CollectionsIcon from "@mui/icons-material/Collections";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Spain, USA, France, Senegal } from "../../images/flags/flags";

const Nav = ({ styling }) => {
  const [openPanel, setPanel] = useState(null);
  return (
    <div
      className="nav"
      //   style={{ transform: isOpen ? "translate(0,0)" : "translate(-100%,0)" }}
      style={styling}
    >
      <div className="nav-wrapper">
        <Accordion
          className="accordion"
          expanded={openPanel === "panel1"}
          onChange={() => {
            if (openPanel === "panel1") setPanel(null);
            else setPanel("panel1");
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="nav-list-container"
          >
            <p to="" className="list-item">
              Features
            </p>
          </AccordionSummary>
          <div className="accordion-dropdown">
            <HashLink to="/#attractions" className="accordion-item">
              <TravelExploreIcon
                className="feature-icon"
                sx={{ color: "#00853f" }}
              />{" "}
              Explore
            </HashLink>
            <HashLink to="/#anemities" className="accordion-item">
              <SettingsAccessibilityIcon
                className="feature-icon"
                sx={{ color: "#b0a500", textShadow: "0 0 2px #000000" }}
              />
              Anemities
            </HashLink>
            <HashLink to="/#house" className="accordion-item">
              <CollectionsIcon
                className="feature-icon"
                sx={{ color: "#e31b23" }}
              />
              Gallery
            </HashLink>
          </div>
        </Accordion>
      </div>
      <div className="nav-wrapper">
        <div className="nav-list-container">
          <HashLink to="/#contact" className="list-item">
            Contact
          </HashLink>
        </div>
      </div>
      <div className="nav-wrapper">
        <Accordion
          className="accordion"
          expanded={openPanel === "panel2"}
          onChange={() => {
            if (openPanel === "panel2") setPanel(null);
            else setPanel("panel2");
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="nav-list-container"
          >
            <p to="" className="list-item">
              Language
            </p>
            <LanguageIcon className="nav-language-icon" />
          </AccordionSummary>
          <div className="accordion-dropdown">
            <HashLink to="/" className="accordion-item disabled-link">
              <img
                src={France}
                alt="flag for language change"
                className="flag-images"
              />
              French
            </HashLink>
            <HashLink to="/" className="accordion-item disabled-link">
              <img
                src={Senegal}
                alt="flag for language change"
                className="flag-images"
              />
              Senegal
            </HashLink>
            <HashLink to="/" className="accordion-item disabled-link">
              <img
                src={Spain}
                alt="flag for language change"
                className="flag-images"
              />
              Spanish
            </HashLink>
          </div>
        </Accordion>
      </div>
      <div className="nav-book">
        <Link className="nav-book-item" to="/book">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Nav;
