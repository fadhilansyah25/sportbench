import Navbar from "components/Navbar/Navbar";
import React from "react";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import LoginPage from 'pages/LoginPage/LoginPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route
            path="/login"
            element={<LoginPage></LoginPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
