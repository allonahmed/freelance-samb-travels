import "./App.css";
import Main from "./pages/Main";
import Book from "./pages/Book";
import { Routes, Route } from "react-router-dom";
import StripeContainer from "./components/booking/StripeContainer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
