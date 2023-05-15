import "./App.css";
import Nav from "./components/Nav";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ItemList from "./pages/ItemList"
import ProductList from "./pages/ProductList"
import BookmarkList from "./pages/BookmarkList"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/1" element={<ProductList />} />
        <Route path="/2" element={<BookmarkList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
