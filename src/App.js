import React from "react";
import "./App.css";
import MasterView from "./components/MasterView";
import { Navigate, Route, Routes } from "react-router-dom";
import MobileDetail from "./components/MobileDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<MasterView />} />
        <Route path="products/:id" element={<MobileDetail />} />
      </Routes>
    </>
  );
}

export default App;
