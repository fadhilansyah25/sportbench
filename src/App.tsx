// import Navbar from "components/Navbar/Navbar";
// import RegisterPage from "pages/RegisterPage/RegisterPage";
// import LoginPage from "pages/LoginPage/LoginPage";
// import LandingPage from "pages/LandingPage";
// import ProductPage from "pages/ProductPage/ProductPage";
// import ConfirmPage from "pages/ConfirmPage/ConfirmPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import CheckoutPage from "pages/CheckoutPage/CheckoutPage";
// import NewProductPage from "pages/NewProductPage";
// import ManCategoryPage from "pages/ManCategoryPage";
// import WomenProductPage from "pages/WomenProductPage";
// import LimitedProductPage from "pages/LimitedProductPage";
// import KidsProductPage from "pages/KidsProductPage";
// import ToolsProductPage from "pages/ToolsProductPage";
import "./App.css";

import HomePage from "./homepage";
import Navbar from "./common/Navbar";

function App() {
  // const currentUser = useSelector((state) =>
  //   state.currentUser ? JSON.parse(state.currentUser) : null
  // );
  // const expired = Date.now() > currentUser?.stsTokenManager?.expirationTime;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          {/* <Route
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
          <Route
            path="/newproduct"
            element={<NewProductPage></NewProductPage>}
          ></Route>
          <Route
            path="/man-category"
            element={<ManCategoryPage></ManCategoryPage>}
          ></Route>
          <Route
            path="/women-category"
            element={<WomenProductPage></WomenProductPage>}
          ></Route>
          <Route
            path="/limited-category"
            element={<LimitedProductPage></LimitedProductPage>}
          ></Route>
          <Route
            path="/kids-category"
            element={<KidsProductPage></KidsProductPage>}
          ></Route>
          <Route
            path="/tools-category"
            element={<ToolsProductPage></ToolsProductPage>}
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductPage></ProductPage>}
          ></Route>
          <Route
            path="/product/checkout/:id"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/confirmTrans"
            element={<ConfirmPage></ConfirmPage>}
          ></Route> */}
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
