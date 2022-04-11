import React, { useState } from "react";
import validator from "validator";
import Header from "../components/header/Header";
import BookingSteps from "../components/booking/BookingSteps";
import "../styles/booking.css";
import Personal from "../components/booking/Personal";
import Orders from "../components/booking/Orders";
import CartSummary from "../components/booking/CartSummary";
import AddOns from "../components/booking/AddOns";
import { useSelector, useDispatch } from "react-redux";
import { updateError, updateActiveForm } from "../redux/reducers";
import StripeContainer from "../components/booking/StripeContainer";

const Book = () => {
  const data = useSelector((state) => state.reduxStore);
  const dispatch = useDispatch();
  console.log(data);

  const nextClick = async () => {
    if (data.activeForm === 1) {
      if (data.roomCount && data.guestCount) {
        dispatch(updateActiveForm(data.activeForm + 1));
        dispatch(updateError(null));
      } else {
        dispatch(updateError("All fields required"));
      }
    } else if (data.activeForm === 2) {
      dispatch(updateActiveForm(data.activeForm + 1));
    } else if (data.activeForm === 3) {
      if (data.emailAddress && data.fullName && data.phoneNumber) {
        if (!validator.isEmail(data.emailAddress)) {
          dispatch(updateError("Enter a valid email address!"));
        } else {
          dispatch(updateActiveForm(data.activeForm + 1));
          dispatch(updateError(null));
        }
      } else {
        dispatch(updateError("All fields required"));
      }
    }
  };

  return (
    <div className="booking">
      <Header
        cr="rgb(1,1,1)"
        bg="rgb(248,248,248)"
        border="1px solid black"
        full={false}
      />

      <div className="booking-content">
        <div className="book-container">
          <div className="form-options">
            <BookingSteps active={data.activeForm} />
            <Personal active={data.activeForm} />
            <AddOns active={data.activeForm} />
            <Orders active={data.activeForm} />
            <StripeContainer active={data.activeForm} />
          </div>
          <div className="controls">
            <div
              className="controls-container"
              style={
                data.activeForm === 1
                  ? { justifyContent: "flex-end" }
                  : { justifyContent: "space-between" }
              }
            >
              <button
                style={
                  data.activeForm === 1
                    ? { display: "none" }
                    : { display: "inline-block" }
                }
                className="controls-button prev"
                onClick={() => dispatch(updateActiveForm(data.activeForm - 1))}
              >
                Go Back
              </button>
              <button className="controls-button next" onClick={nextClick}>
                Next
              </button>
            </div>
          </div>
        </div>
        <CartSummary />
      </div>
    </div>
  );
};

export default Book;
