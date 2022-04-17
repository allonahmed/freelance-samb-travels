import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEmail, updateName, updatePhone } from "../../redux/reducers";

const Personal = ({ active }) => {
  const data = useSelector((state) => state.reduxStore);
  const dispatch = useDispatch();

  return (
    <div
      className="personal-form form"
      style={active === 4 ? { display: "flex" } : { display: "none" }}
    >
      <h3 className="error-handle">{data.error ? data.error : ""}</h3>
      <div className="field">
        <label>FULL NAME</label>
        <input
          className="field-input"
          placeholder="First Name"
          type="text"
          value={data.fullName || ""}
          onChange={(item) => dispatch(updateName(item.target.value))}
          required
        />
      </div>
      <div className="field">
        <label>EMAIL ADDRESS</label>
        <input
          className="field-input"
          placeholder="Email"
          type="email"
          value={data.emailAddress || ""}
          onChange={(item) => dispatch(updateEmail(item.target.value))}
          required
        />
      </div>
      <div className="field">
        <label>PHONE NUMBER</label>
        <input
          className="field-input"
          placeholder="Phone Number"
          value={data.phoneNumber || ""}
          onChange={(item) => dispatch(updatePhone(item.target.value))}
          type="tel"
          required
        />
      </div>
    </div>
  );
};

export default Personal;
