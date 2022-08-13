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
import { LoaderSpinner } from "../Loader";
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
  const [loading, setLoading] = useState(false);

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
  // console.log((userData.priceTaxed * 100).toFixed(2));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Validating information:");
    // await formValidate();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await axios.post(
          "https://dakar-travels.herokuapp.com/payment",
          {
            amount: parseInt(userData.priceTaxed * 100),
            id,
            description: `Customer Name: ${userData.fullName}, Email Address: ${userData.emailAddress
              }, Phone Number: ${userData.phoneNumber}, Room Count: ${userData.roomCount
              }, Guest Count: ${userData.guestCount}, Day Count: ${userData.dayCount
              },Check In: ${userData.checkIn}, Check Out: ${userData.checkOut
              }, Amount Paid: ${userData.price * 0.07 + userData.price} `
          }
        );
        await console.log(response);

        if (response.data.success) {
          console.log("success");
          dispatch(updateSuccess(true));
          setLoading(false);
        }
      } catch (error) {
        console.log("Error", error);
        dispatch(updateError("Invalid card information"))
        setLoading(false);
      }
    } else {
      console.log(error.message);
      dispatch(updateError(error.message));
      setLoading(false);
    }
  };

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
      <form onSubmit={formValidate} style={{ width: "100%" }} className="field">
        <label>Card Information{star}</label>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button className="payment-button">{loading && <LoaderSpinner height='30' width='30' />}Pay</button>
      </form>
    </div>
  );
};

export default Form;
