import React, { useEffect } from "react";
import "../../styles/cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCountsAdd,
  updateCountsMinus,
  updateAddOns,
  updatePrice
} from "../../redux/reducers";
import {
  monument,
  safari,
  goree,
  chefteaches,
  atvride,
  personalchef,
  room
} from "../../images/images";
import { Close } from "@mui/icons-material";

const CartSummary = () => {
  const data = useSelector((state) => state.reduxStore);
  const dispatch = useDispatch();

  const getRoomPrice = () => {
    if (data.roomCount === 1) return 45;
    else if (data.roomCount === 2) return 80;
    else if (data.roomCount === 3) return 135;
    else if (data.roomCount === 6) return 220;
  };

  const options = [
    {
      addOn: data.roomCount && data.roomCount > 0,
      image: room,
      count: data.roomCount,
      price: getRoomPrice() * data.dayCount,
      title: `${data.roomCount} Rooms`,
      id: 6
    },
    {
      addOn: data.personalChef,
      image: personalchef,
      count: data.personalChefCount,
      price: 40 * data.personalChefCount,
      title: "Personal Chef",
      id: 0
    },
    {
      addOn: data.atvRide,
      image: atvride,
      count: data.atvCount,
      price: 40 * data.atvCount,
      title: "ATV Ride",
      id: 1
    },
    {
      addOn: data.goree,
      image: goree,
      count: data.goreeCount,
      price: 30 * data.goreeCount,
      title: "Tour of Gorée Island",
      id: 2
    },
    {
      addOn: data.lessons,
      image: chefteaches,
      count: data.lessonsCount,
      price: 80 * data.lessonsCount,
      title: "Senegalese Cooking Lessons",
      id: 3
    },
    {
      addOn: data.safari,
      image: safari,
      count: data.safariCount,
      price: 120 * data.safariCount,
      title: "Fathala Wildlife Reserve",
      id: 4
    },
    {
      addOn: data.renaissance,
      image: monument,
      count: data.renaissanceCount,
      price: 20 * data.renaissanceCount,
      title: "Monument of the Renaissance",
      id: 5
    }
  ];

  const filteredOptions = options.filter((option) => {
    return option.addOn;
  });

  useEffect(() => {
    let price = 0;
    for (let i = 0; i < filteredOptions.length; i += 1) {
      price += filteredOptions[i].price;
    }
    dispatch(updatePrice(price));
  }, [data]);

  const taxTotal = () => {
    return data.price * 0.07;
  };

  return (
    <div className="cart-container">
      <h2>Order Summary</h2>
      <div className="order-container">
        {filteredOptions.length === 0 ? (
          <div className="empty-cart">Your cart is currently empty.</div>
        ) : (
          filteredOptions.map((option, key) => {
            return (
              <div className="selected-container" key={key}>
                <img
                  src={option.image}
                  alt="selected option"
                  className="selected-image"
                />
                <div className="selected-content">
                  <div className="selected-title">{option.title}</div>
                  {option.id === 6 ? (
                    <div className="selected-room-numbers">
                      {" "}
                      {`$${getRoomPrice()} per day (${
                        data.dayCount
                      } days)`}{" "}
                    </div>
                  ) : (
                    <div className="selected-numbers">
                      <button
                        className="counter-buttons"
                        onClick={() => dispatch(updateCountsMinus(option.id))}
                      >
                        -
                      </button>
                      <div className="selected-per-container">
                        {option.count}
                      </div>
                      <button
                        className="counter-buttons"
                        onClick={() => dispatch(updateCountsAdd(option.id))}
                      >
                        {" "}
                        +{" "}
                      </button>
                      <span style={{ padding: "0 5px " }}> x </span>
                      <div className="selected-price">
                        {" "}
                        $ {option.price / option.count}.00
                      </div>
                    </div>
                  )}
                  <div className="selected-total">
                    Total: ${" "}
                    {option.id === 6 ? option.price : `${option.price}.00`}
                  </div>
                </div>
                <Close
                  className="remove-from-cart"
                  style={
                    option.id === 6 ? { display: "none" } : { display: "block" }
                  }
                  onClick={() => {
                    dispatch(updateAddOns(option.id));
                  }}
                />
              </div>
            );
          })
        )}
      </div>
      <div className="discount-container">
        <h2>Gift Card/Discount code</h2>
        <div className="enter-discount">
          <input className="discount-input" />
          <button className="discount-button">Apply</button>
        </div>
      </div>
      <div className="price-container">
        <div className="price">
          <p>Subtotal</p>
          <p>${data.price.toFixed(2)}</p>
        </div>

        <div className="price">
          <p>Tax</p>
          <p>${taxTotal().toFixed(2)}</p>
        </div>
        <div className="price">
          <p>Discount</p>
          <p>$0.00</p>
        </div>
        <div
          className="price"
          style={{ fontWeight: "900", fontSize: "16px", opacity: "1" }}
        >
          <p>Total</p>
          <p>${(data.price + taxTotal()).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
