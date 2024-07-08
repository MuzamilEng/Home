import React from "react";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeMaintainence from "./pages/HomeMaintainence";
import PaintingServices from "./pages/PaintingServices";
import Franchise from "./pages/Franchise";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home-maintainence" element={<HomeMaintainence />} />
      <Route path="/painting-services" element={<PaintingServices />} />
      <Route path="/franchise" element={<Franchise />} />
    </Routes>
  );
};

export default App;
