import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../src/components/Home/Home"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;