import React from "react";
import SmallHeader from "../components/header/SmallHeader";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        You're purchase was successful. Check you email for you're receipt. If
        you have any questions, email us at email@gmail.com
      </div>
      {/* <Link to="/">Back to home</Link> */}
      <button onClick={() => (window.location.href = "/")}>Back to home</button>
    </div>
  );
};

export default Success;
