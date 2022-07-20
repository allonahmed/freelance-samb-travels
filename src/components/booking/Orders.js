import React, { useState } from "react";
import Select from "react-select";
import { roomOptions, guestOptions } from "./booking.data";
import DatePicker from "../datepicker/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import { updateRoomCount, updateGuestCount } from "../../redux/reducers";

const Orders = ({ active }) => {
  const data = useSelector((state) => state.reduxStore);
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
  return (
    <div
      className="Order-Form form"
      style={active === 1 ? { display: "flex" } : { display: "none" }}
    >
      <h3 className="error-handle">{data.error ? data.error : ""}</h3>
      <h2 className="form-header">Book Your Stay</h2>

      <div className="field">
        <label>How many rooms will you need?{star}</label>
        <Select
          placeholder="Select rooms..."
          options={roomOptions}
          value={data.roomCount ? data.roomCount.value : 0}
          onChange={(value) => {
            dispatch(updateRoomCount(value.value));
            dispatch(updateGuestCount(null));
          }}
          className="react-select-component"
          maxMenuHeight={200}
          classNamePrefix="react-select"
          theme={(theme) => ({
            ...theme,
            borderRadius: "5px",
            background: "rgb(239, 242, 247)",
            colors: {
              ...theme.colors,
              primary25: "#00853f",
              primary: "black",
              neutral70: "white",
              neutral90: "#00853f",
              neutral0: "rgb(239, 242, 247)"
            }
          })}
        />
      </div>
      <div className="field">
        <label>How many guests will be staying with us?{star}</label>
        <Select
          placeholder="Select guests..."
          options={guestOptions.slice(
            data.roomCount ? data.roomCount - 1 : 0,
            data.roomCount ? data.roomCount * 2 : 1
          )}
          value={data.guestCount ? data.guestCount.value : 0}
          onChange={(value) => dispatch(updateGuestCount(value.value))}
          className="react-select-component"
          maxMenuHeight={200}
          classNamePrefix="react-select"
          onKeyDown={(event) => {
            event.preventDefault();
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: "5px",
            colors: {
              ...theme.colors,
              primary25: "#00853f",
              primary: "black",
              neutral70: "white",
              neutral90: "#00853f",
              neutral0: "rgb(239, 242, 247)"
            }
          })}
        />
      </div>
      <div className="field">
        <label>When will you like to book your stay?{star}</label>
        <DatePicker />
      </div>
    </div>
  );
};

export default Orders;
