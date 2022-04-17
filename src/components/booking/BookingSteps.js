import React, { useState } from "react";

const BookingSteps = ({ active }) => {
  const [steps, updateSteps] = useState([
    { title: "Orders", icon: "", isComplete: false },
    { title: "Add Ons", icon: "", isComplete: false },
    { title: "Payment", icon: "", isComplete: false }
  ]);

  return (
    <div className="book-steps">
      <div
        className="steps"
        style={
          active > 1
            ? { borderColor: "#00853f" }
            : { borderColor: "rgb(170, 170, 170)" }
        }
      >
        <span
          style={
            active > 0
              ? { background: "#00853f" }
              : { background: "rgb(170, 170, 170)" }
          }
        ></span>
        <p
          style={
            active === 1 ? { color: "green" } : { color: "rgb(170, 170, 170)" }
          }
        >
          {steps[0].title}
        </p>
      </div>
      <div
        className="bar"
        style={
          active > 1
            ? { background: "#00853f" }
            : { background: "rgb(170, 170, 170)" }
        }
      ></div>
      <div
        className="steps"
        style={
          active > 2
            ? { borderColor: "#00853f" }
            : { borderColor: "rgb(170, 170, 170)" }
        }
      >
        <span
          style={
            active > 1
              ? { background: "#00853f" }
              : { background: "rgb(170, 170, 170)" }
          }
        ></span>
        <p
          style={
            active === 2
              ? { color: "#00853f" }
              : { color: "rgb(170, 170, 170)" }
          }
        >
          {steps[1].title}
        </p>
      </div>
      <div
        className="bar"
        style={
          active > 2
            ? { background: "#00853f" }
            : { background: "rgb(170, 170, 170)" }
        }
      ></div>
      <div
        className="steps"
        style={
          active > 3
            ? { borderColor: "#00853f" }
            : { borderColor: "rgb(170, 170, 170)" }
        }
      >
        <span
          style={
            active > 2
              ? { background: "#00853f" }
              : { background: "rgb(170, 170, 170)" }
          }
        ></span>
        <p
          style={
            active === 3
              ? { color: "#00853f" }
              : { color: "rgb(170, 170, 170)" }
          }
        >
          {steps[2].title}
        </p>
      </div>
    </div>
  );
};

export default BookingSteps;
