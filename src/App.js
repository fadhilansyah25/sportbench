import Navbar from "components/Navbar/Navbar";
import React from "react";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import LoginPage from "pages/LoginPage/LoginPage";
import LandingPage from "pages/LandingPage/LandingPage";
import ProductPage from 'pages/ProductPage/ProductPage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state) =>
    state.currentUser ? JSON.parse(state.currentUser) : null
  );
  const expired = Date.now() > currentUser?.stsTokenManager?.expirationTime;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route
            path="/register"
            element={
              currentUser && !expired ? (
                <Navigate to="/"></Navigate>
              ) : (
                <RegisterPage></RegisterPage>
              )
            }
          ></Route>
          <Route
            path="/login"
            element={
              currentUser && !expired ? (
                <Navigate to="/"></Navigate>
              ) : (
                <LoginPage></LoginPage>
              )
            }
          ></Route>
          <Route path="/product/:id" element={<ProductPage></ProductPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
