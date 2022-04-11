import { configureStore } from "@reduxjs/toolkit";
import reduxStore from "./reducers";

export default configureStore({
  reducer: {
    reduxStore: reduxStore
  }
});
