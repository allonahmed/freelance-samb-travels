import React from "react";
import { Link } from "react-router-dom";
import '../styles/paymentForm.css'

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        <h1>You're purchase was successful! </h1>
        <p>Check you email for you're receipt. </p>
        <p>
          If you have any questions, email us at{" "}
          <a href='mailto:allonahmed1@gmail.com' target='_blank' rel="noreferrer">email@gmail.com</a>
        </p>
      </div>
      <Link to="/" style={clickable}>Back to home</Link>
    </div>
  );
};

export default Success;

const clickable = {
  backgroundColor: '#00853f',
  color: '#fff',
  borderRadius: 10,
  padding: '10px 15px',
  textDecoration: 'none'
}