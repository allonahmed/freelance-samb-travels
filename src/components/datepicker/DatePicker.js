import React, { useState, useEffect } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCheckIn,
  updateCheckOut,
  updateDayCount
} from "../../redux/reducers";
import axios from "axios";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const DatePicker = () => {
  const [state, setState] = useState([
    {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 2),
      key: "selection"
    }
  ]);
  const [unavailable, setUnavailable] = useState(); // days we want disabled

  const data = useSelector((state) => state.reduxStore);
  const dispatch = useDispatch();

  //get days that are unavailable
  useEffect(() => {
    axios
      .post("http://localhost:8083/view_availability", {
        roomCount: data.roomCount
      })
      .then((res) => {
        if (res.data) {
          let badDates = [];
          res.data.forEach((element) => {
            badDates.push(new Date(element.date));
          });
          setUnavailable(badDates);
        }
      });
  }, [data]);

  const handleChange = (item) => {
    setState([item.selection]);
  };

  //updates our global state check in and check out (this is what we will use to send to db)
  useEffect(() => {
    dispatch(updateCheckIn(state[0].startDate.toLocaleDateString()));
    dispatch(updateCheckOut(state[0].endDate.toLocaleDateString()));
    dispatch(updateDayCount());
  }, [state]);

  return (
    <DateRange
      onChange={handleChange}
      months={2}
      dateDisplayFormat={"MMM / d / yyyy"}
      disabledDates={unavailable}
      editableDateInputs={true}
      ranges={state}
      startDatePlaceholder={"Check in date"}
      direction="horizontal"
      rangeColors={["#00853f"]}
      color="#00853f"
      endDatePlaceholder="Check out date"
      minDate={new Date()}
      maxDate={addDays(new Date(), 366)}
    />
  );
};

export default DatePicker;
