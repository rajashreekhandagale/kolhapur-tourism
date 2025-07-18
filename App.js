
import React, { useState } from "react";
import TourPackages from "./components/TourPackages";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-red-700 mb-6">Kolhapur Weekend Tour Packages</h1>
      <TourPackages />
    </div>
  );
}

export default App;
