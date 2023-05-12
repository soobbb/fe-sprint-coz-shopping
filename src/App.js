import "./App.css";
import Nav from "./components/Nav";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
