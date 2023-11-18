import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/home";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/blue" className="nav-link">
            Blue
          </Link>

          <Link to="/red" className="nav-link">
            Red
          </Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
