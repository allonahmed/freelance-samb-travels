import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import Success from "./pages/Success";
import Main from "./pages/Main";
import Book from "./pages/Book";

import "./App.css";

const API_URL = "https://dakar-travels.herokuapp.com";

function App() {
  const userData = useSelector((state) => state.reduxStore);
  useEffect(() => {
    if (userData.paymentSuccess)
      axios
        .post(`${API_URL}/send-info`, {
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
          axios
            .post(`${API_URL}/send-dates`, {
              day_count: userData.dayCount,
              check_in: userData.checkIn,
              room_count: userData.roomCount
            })
            .then((response) => {
              if (response.data) {
                console.log(response.data);
              } else {
                console.log("send-dates request failed");
              }
            });
          if (resp.data) {
            console.log(resp.data);
          } else {
            console.log("somethign went wrogn!");
          }
        });
  }, [userData.paymentSuccess]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path={"/book"}
          element={
            userData.paymentSuccess ? <Navigate to="/payment=true" /> : <Book />
          }
        />
        <Route path={"/payment=true"} element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
