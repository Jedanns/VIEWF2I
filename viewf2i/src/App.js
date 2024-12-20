import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookStore from "./pages/BookStore/BookStorePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<BookStore />} />
        <Route path="*" element={<HomePage />} /> {/* Redirect unknown paths to HomePage */}
      </Routes>
    </Router>
  );
};

export default App;
