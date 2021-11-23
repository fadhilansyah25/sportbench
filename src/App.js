import Navbar from "components/Navbar/Navbar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
