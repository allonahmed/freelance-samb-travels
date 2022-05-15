import React from "react";

import { Link } from "react-router-dom";
import "../../styles/header1.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import {
  linkAnimation,
  sideAnimation,
  buttonAnimation
} from "./Nav.animations";
import getWindowDimensions from "../../assets/windowDimensions";

const Nav = () => {
  const [x, cyclex] = useCycle(false, true);
  const { width } = getWindowDimensions();

  return (
    <div>
      <motion.button
        className="dropdown-icon"
        onClick={cyclex}
        initial="close"
        animate={x ? "open" : "close"}
        variants={buttonAnimation}
        whileHover={{
          scale: 1.1
        }}
      >
        {x ? <CloseIcon /> : <MenuIcon />}
      </motion.button>
      <AnimatePresence>
        {x && (
          <motion.div
            animate={x ? "open" : "close"}
            initial="close"
            variants={sideAnimation(width > 800 ? "300px" : "100vw")}
            className="nav"
            exit={{
              width: 0,
              height: 0,
              opacity: 0,
              transition: { delay: 0, duration: 0.5 },
              borderBottomLeftRadius: "100%"
            }}
          >
            info
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
