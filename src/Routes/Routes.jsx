import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

const routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default routes;
