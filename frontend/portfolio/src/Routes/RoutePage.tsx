import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/Home";
import MainNavigation from "../pages/navigation/MainNavigation";

export default function RoutePage() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
