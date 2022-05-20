import React, { useState } from "react";
import { send } from "emailjs-com";
import { Parallax } from "react-parallax";
import contactImage from "../images/contact.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

import "../styles/contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [errorMessage, setError] = useState("");
  const [sent, setSent] = useState(null);
  const [toSend, setToSend] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const validate = () => {
    if (
      toSend.user_name.length === 0 ||
      toSend.user_email.length === 0 ||
      toSend.message.length === 0
    ) {
      setError("You must complete all fields to submit");
      return false;
    } else {
      setError("Sent!");
      return true;
    }
  };

  const HandleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const SendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_PUBLIC_KEY
      )
        .then((response) => {
          setSent(true);
        })
        .catch((err) => {
          setSent(false);
        });
    }
  };

  return (
    <div className="contact-page " id="contact">
      <Parallax strength={300} bgImage={contactImage}>
        <div className="lighten">
          <div className="contact-container">
            <div className="map-container">
              <h5 className="about-us-heading">About Us</h5>
              <div className="about-item">
                <div className="about-icon">
                  <LocationOnIcon />
                </div>
                <div className="about-content">
                  <div className="about-title">Address</div>
                  <a
                    className="about-description"
                    href="https://goo.gl/maps/Wue7XxaJWmHuy9Hz5"
                  >
                    {" "}
                    Parcelle Assainies Unité 15 Numero 244
                  </a>
                </div>
              </div>
              <div className="about-item">
                <div className="about-icon">
                  <QueryBuilderIcon />
                </div>
                <div className="about-content">
                  <div className="about-title">Availability</div>
                  <Link to="/book" className="about-description">
                    Book Now to view availability
                  </Link>
                </div>
              </div>
              <div className="about-item">
                <div className="about-icon">
                  <MailOutlineIcon />
                </div>
                <div className="about-content">
                  <div className="about-title">Email</div>
                  <a
                    className="about-description"
                    href="mailto:allonahmed@mec.science"
                  >
                    randomemail@gmail.com
                  </a>
                </div>
              </div>
              <div className="about-item">
                <div className="about-icon">
                  <InstagramIcon />
                </div>
                <div className="about-content">
                  <div className="about-title">Social Media</div>
                  <a href="instagram.com" className="about-description">
                    Instagramlink.com
                  </a>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={SendEmail}>
              <div className="contact-header">Contact Us</div>
              <div className="form-content">
                <div className="contact-error">
                  {errorMessage.length > 0 ? (
                    <h4>{errorMessage}</h4>
                  ) : (
                    <h4></h4>
                  )}
                </div>
                <div className="section">
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="enter your name"
                    value={toSend.user_name}
                    onChange={HandleChange}
                  />
                </div>
                <div className="section">
                  <label>Email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="enter your email"
                    value={toSend.user_email}
                    onChange={HandleChange}
                  />
                </div>
                <div className="section">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="enter your message"
                    type="text"
                    // required
                    value={toSend.message}
                    onChange={HandleChange}
                  />
                </div>
                <button className="submit-form" onClick={SendEmail}>
                  {sent ? (sent === true ? "Sent" : "Failed") : "Send Email"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Contact;
