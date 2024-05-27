import React from "react";
import { Routes, Route } from "react-router-dom";
import Design from "./Design/Design";
import Domain from "./Design/Domain";

export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/app" element={<Design />} />
        <Route path="/domain" element={<Domain />} />
      </Routes>
    </div>
  );
}
