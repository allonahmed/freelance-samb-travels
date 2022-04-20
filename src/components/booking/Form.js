import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import {
  updateEmail,
  updateName,
  updatePhone,
  updateError,
  updateSuccess
} from "../../redux/reducers";

import validator from "validator";
import axios from "axios";

import "../../styles/paymentForm.css";
import { personalchef, safari } from "../../images/images";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      color: "#000",
      backgroundColor: "#eff2f7",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d"
      }
    },
    invalid: {
      fontFamily: "Arial, sans-serif",
      color: "#002",
      iconColor: "#fa755a"
    }
  }
};

const Form = () => {
  const stripe = useStripe();
  const elements = useElements();
  const userData = useSelector((state) => state.reduxStore);
  const dispatch = useDispatch();

  const star = (
    <span
      style={{
        marginBottom: "15px",
        color: "red",
        fontSize: "18px",
        paddingLeft: "1px"
      }}
    >
      *
    </span>
  );
  const formValidate = async (e) => {
    e.preventDefault();
    if (userData.emailAddress && userData.fullName && userData.phoneNumber) {
      if (!validator.isEmail(userData.emailAddress)) {
        dispatch(updateError("Please enter a valid email address!"));
      } else {
        handleSubmit(e);
        dispatch(updateError(null));
      }
    } else {
      dispatch(updateError("All fields required!"));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Validating information:");
    // await formValidate();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await axios.post("http://localhost:8083/payment", {
          amount: userData.priceTaxed * 100,
          id,
          description: `Customer Name: ${userData.fullName}, Email Address: ${
            userData.emailAddress
          }, Phone Number: ${userData.phoneNumber}, Room Count: ${
            userData.roomCount
          }, Guest Count: ${userData.guestCount}, Day Count: ${
            userData.dayCount
          },Check In: ${userData.checkIn}, Check Out: ${
            userData.checkOut
          }, Amount Paid: ${userData.price * 0.07 + userData.price} `
        });
        await console.log(response);

        if (response.data.success) {
          console.log("success");
          axios
            .post("http://localhost:8083/send-info", {
              full_name: userData.fullName,
              email_address: userData.emailAddress,
              phone_number: userData.phoneNumber,
              check_in: userData.checkIn,
              check_out: userData.checkOut,
              day_count: userData.dayCount,
              room_count: userData.roomCount,
              guest_count: userData.guestCount,
              price: userData.price,
              total_price: userData.priceTaxed,
              personal_chef: userData.personalChef,
              personal_chef_count: userData.personalChefCount,
              atv_ride: userData.atvRide,
              atv_ride_count: userData.atvCount,
              goree_island: userData.goree,
              goree_island_count: userData.goreeCount,
              cooking_lessons: userData.lessons,
              cooking_lessons_count: userData.lessonsCount,
              safari: userData.safari,
              safari_count: userData.safariCount,
              renaissance: userData.renaissance,
              renaissance_count: userData.renaissanceCount
            })
            .then((resp) => {
              if (resp.data) {
                console.log(resp.data);
              } else {
                console.log("somethign went wrogn!");
              }
            });
          dispatch(updateSuccess(true));
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
      dispatch(updateError(error.message));
    }
  };
  //send customer information to db
  useEffect(() => {
    console.log(userData.paymentSuccess);
  }, [userData.paymentSuccess]);
  console.log(userData);

  return (
    <div className="form">
      <h3 className="error-handle">{userData.error ? userData.error : ""}</h3>
      <div className="field">
        <label>FULL NAME{star}</label>
        <input
          className="field-input"
          placeholder="First Name"
          type="text"
          value={userData.fullName || ""}
          onChange={(item) => dispatch(updateName(item.target.value))}
          required
        />
      </div>
      <div className="field">
        <label>EMAIL ADDRESS{star}</label>
        <input
          className="field-input"
          placeholder="Email"
          type="email"
          value={userData.emailAddress || ""}
          onChange={(item) => dispatch(updateEmail(item.target.value))}
          required
        />
      </div>
      <div className="field">
        <label>PHONE NUMBER{star}</label>
        <input
          className="field-input"
          placeholder="Phone Number"
          value={userData.phoneNumber || ""}
          onChange={(item) => dispatch(updatePhone(item.target.value))}
          type="tel"
          required
        />
      </div>
      <form onSubmit={formValidate} style={{ width: "100%" }}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button className="payment-button">Pay</button>
      </form>
    </div>
  );
};

export default Form;
