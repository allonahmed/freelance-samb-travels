import React, { useState, useEffect } from "react";
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
import SmallHeader from "../components/header/SmallHeader";
import useWindowDimensions from "../assets/windowDimensions";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Book = () => {
  const data = useSelector((state) => state.reduxStore);
  const dispatch = useDispatch();
  // console.log(data);
  const { width, height } = useWindowDimensions();
  const [openCart, setCart] = useState(false);
  console.log(width);

  useEffect(() => {
    setCart(false);
  }, [width]);

  const nextClick = async () => {
    if (data.activeForm === 1) {
      if (data.roomCount && data.guestCount) {
        dispatch(updateActiveForm(data.activeForm + 1));
        dispatch(updateError(null));
      } else {
        dispatch(updateError("All fields required"));
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
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
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div className="booking">
      <SmallHeader
        cr="rgb(1,1,1)"
        bg="rgb(248,248,248)"
        border="1px solid black"
        full={false}
      />

      <div className="booking-content">
        <div className="book-container">
          {openCart ? (
            <CartSummary position="absolute" small={true} />
          ) : (
            <div className="form-options" id="form">
              <BookingSteps active={data.activeForm} />
              <AddOns active={data.activeForm} />
              <Orders active={data.activeForm} />
              <StripeContainer active={data.activeForm} />
            </div>
          )}
          <div className="controls">
            {width <= 1000 && (
              <div
                onClick={() => setCart(!openCart)}
                className="open-cart-container"
              >
                <button className="controls-button">
                  {openCart ? "close" : "open"} cart{" "}
                  <ShoppingCartIcon sx={{ height: "15px", color: "white" }} />
                </button>
              </div>
            )}

            <div
              className="controls-container"
              style={{
                display: openCart ? "none" : "flex",
                justifyContent:
                  data.activeForm === 1 ? "flex-end" : "space-between"
              }}
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
              <button
                style={
                  data.activeForm === 3
                    ? { display: "none" }
                    : { display: "inline-block" }
                }
                className="controls-button next"
                onClick={nextClick}>
                Next
              </button>
            </div>
          </div>
        </div>
        {width > 1000 && <CartSummary position="relative" small={false} />}
      </div>
    </div>
  );
};

export default Book;
