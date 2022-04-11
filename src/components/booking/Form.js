import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";

import "../../styles/paymentForm.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d"
      }
    },
    invalid: {
      fontFamily: "Arial, sans-serif",
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const Form = () => {
  const [success, updateSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const userData = useSelector((state) => state.reduxStore);

  const handleSubmit = async (e) => {
    console.log("something is happening");

    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await axios.post("http://localhost:8080/payment", {
          amount: userData.price * 100,
          id
        });

        if (response.data.success) {
          console.log("success");
          updateSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="payment-button">Pay</button>
        </form>
      ) : (
        <div>
          <h2>PURCHASE COMPLETE</h2>
        </div>
      )}
    </>
  );
};

export default Form;
