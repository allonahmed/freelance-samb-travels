import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Form from "./Form";

const PUBLIC_KEY = 'pk_test_51KkCzvI3K1RIkLwsxAt6NfYqYN0NPfogHU85F0Ry4UjH2e13kvycYSgxiaB47YplmTyKxFITsxFG0DYzqsfo0mCP00aDbPSRMm';
// "pk_test_51Kr389Km1rEXqKUQXHOh6eUTxC8A7bx1NWFymt47oTtYCmquJyuQD24kc1MlqHy6JyaP5rtklc2sHBNqdvFRIk2q005Bu07Cq6";

const StripeContainer = ({ active }) => {
  const stripeTestPromise = loadStripe(PUBLIC_KEY);
  return (
    <div style={active === 3 ? { display: "block" } : { display: "none" }}>
      <Elements stripe={stripeTestPromise}>
        <Form />
      </Elements>
    </div>
  );
};

export default StripeContainer;
