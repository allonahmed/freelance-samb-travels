import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Success from "./pages/Success";
import Main from "./pages/Main";
import Book from "./pages/Book";

import "./App.css";

function App() {
  const success = useSelector((state) => state.reduxStore.paymentSuccess);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path={"/book"}
          element={success ? <Navigate to="/payment=true" /> : <Book />}
        />
        <Route path={"/payment=true"} element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
