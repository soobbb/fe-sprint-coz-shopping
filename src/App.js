import "./App.css";
import Nav from "./components/Nav";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ProductBookmarkPage from "./pages/ProductBookmarkPage";
import ProductPage from "./pages/ProductPage";
import BookmarkPage from "./pages/BookmarkPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductBookmarkPage />} />
        <Route path="/product/list" element={<ProductPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
