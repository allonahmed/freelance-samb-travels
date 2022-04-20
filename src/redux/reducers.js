import { createSlice } from "@reduxjs/toolkit";
import { addDays } from "date-fns";

const savedInitialState = {
  roomCount: 1,
  guestCount: null,
  checkIn: addDays(new Date(), 1).toLocaleDateString(),
  checkOut: addDays(new Date(), 2).toLocaleDateString(),
  dayCount: 1,
  personalChef: false,
  personalChefCount: 0,
  atvRide: false,
  atvCount: 0,
  goree: false,
  goreeCount: 0,
  lessons: false,
  lessonsCount: 0,
  safari: false,
  safariCount: 0,
  renaissance: false,
  renaissanceCount: 0,
  fullName: null,
  emailAddress: null,
  phoneNumber: null,
  activeForm: 1,
  price: 0,
  error: null,
  priceTaxed: 0,
  paymentSuccess: false
};

export const reduxStore = createSlice({
  name: "reduxStore",
  initialState: savedInitialState,
  reducers: {
    updateDayCount: (state, action) => {
      let date1 = new Date(state.checkIn);
      let date2 = new Date(state.checkOut);
      let DIT = date2.getTime() - date1.getTime(); //difference in time
      let DID = DIT / (1000 * 3600 * 24); // difference in days
      state.dayCount = DID + 1;
    },
    updateRoomCount: (state, action) => {
      state.roomCount = action.payload;
    },
    updateActiveForm: (state, action) => {
      state.activeForm = action.payload;
    },
    updateGuestCount: (state, action) => {
      state.guestCount = action.payload;
    },
    updateCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    updateCheckOut: (state, action) => {
      state.checkOut = action.payload;
      updateDayCount();
    },
    updateATVRide: (state, action) => {
      state.atvRide = action.payload;
    },
    updateATVCount: (state, action) => {
      state.atvCount = action.payload;
    },
    updateAddOns: (state, action) => {
      if (action.payload === 0) {
        state.personalChef = !state.personalChef;
        if (state.personalChef) state.personalChefCount = state.dayCount;
        else state.personalChefCount = 0;
      } else if (action.payload === 1) {
        state.atvRide = !state.atvRide;
        if (state.atvRide) state.atvCount = state.guestCount;
        else state.atvCount = 0;
      } else if (action.payload === 2) {
        state.goree = !state.goree;
        if (state.goree) state.goreeCount = state.guestCount;
        else state.goreeCount = 0;
      } else if (action.payload === 3) {
        state.lessons = !state.lessons;
        if (state.lessons) state.lessonsCount = 1;
        else state.lessonsCount = 0;
      } else if (action.payload === 4) {
        state.safari = !state.safari;
        if (state.safari) state.safariCount = state.guestCount;
        else state.safariCount = 0;
      } else if (action.payload === 5) {
        state.renaissance = !state.renaissance;
        if (state.renaissance) state.renaissanceCount = state.guestCount;
        else state.renaissanceCount = 0;
      }
    },
    updateCountsAdd: (state, action) => {
      if (action.payload === 0)
        state.personalChefCount = state.personalChefCount + 1;
      else if (action.payload === 1) state.atvCount = state.atvCount + 1;
      else if (action.payload === 2) state.goreeCount = state.goreeCount + 1;
      else if (action.payload === 3)
        state.lessonsCount = state.lessonsCount + 1;
      else if (action.payload === 4) state.safariCount = state.safariCount + 1;
      else if (action.payload === 5)
        state.renaissanceCount = state.renaissanceCount + 1;
    },
    updateCountsMinus: (state, action) => {
      if (action.payload === 0)
        state.personalChefCount = state.personalChefCount - 1;
      else if (action.payload === 1) state.atvCount = state.atvCount - 1;
      else if (action.payload === 2) state.goreeCount = state.goreeCount - 1;
      else if (action.payload === 3)
        state.lessonsCount = state.lessonsCount - 1;
      else if (action.payload === 4) state.safariCount = state.safariCount - 1;
      else if (action.payload === 5)
        state.renaissanceCount = state.renaissanceCount - 1;
    },
    updatePrice: (state, action) => {
      state.price = action.payload;
    },
    updateError: (state, action) => {
      state.error = action.payload;
    },
    updatePriceTaxed: (state, action) => {
      state.priceTaxed = action.payload;
    },
    updateEmail: (state, action) => {
      state.emailAddress = action.payload;
    },
    updateName: (state, action) => {
      state.fullName = action.payload;
    },
    updatePhone: (state, action) => {
      state.phoneNumber = action.payload;
    },
    updateSuccess: (state, action) => {
      state.paymentSuccess = action.payload;
    }
  }
});

export const {
  updateRoomCount,
  updateActiveForm,
  updateGuestCount,
  updateCheckIn,
  updateCheckOut,
  updateATVRide,
  updateATVCount,
  updateDayCount,
  updateAddOns,
  updateCountsAdd,
  updateCountsMinus,
  updatePrice,
  updateError,
  updateEmail,
  updateName,
  updatePhone,
  updatePriceTaxed,
  updateSuccess
} = reduxStore.actions;

export default reduxStore.reducer;
