import React from "react";
import SportBenchLogo from "assets/Logo.svg";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "redux/reducer";
import { logOutFirebaseAuth } from "firebase";

export default function Navbar() {
  const currentUser = useSelector((state) =>
    state.currentUser ? JSON.parse(state.currentUser) : null
  );

  const expired = Date.now() > currentUser?.stsTokenManager?.expirationTime;
  const dispatch = useDispatch();

  const logout = async () => {
    await logOutFirebaseAuth();
    dispatch(setCurrentUser(null));
  };

  return (
    <div className="custom-navbar">
      <div className="container d-flex justify-content-between">
        <div className="d-flex">
          <div className="find-store py-2 pe-3 d-flex">
            <span className="material-icons-outlined">location_on</span>
            <Link to="/" className="ms-2">
              Find Store
            </Link>
          </div>
          <div className="track-order py-2 px-3 d-flex">
            <Link to="/" className="">
              Track Order
            </Link>
          </div>
        </div>
        <div className="d-flex">
          <div className="register-login py-2 pe-3 d-flex">
            <span className="material-icons-outlined">person</span>
            {currentUser && !expired ? (
              <>
                <Link to="/login" className="ms-2">
                  {currentUser?.displayName}
                </Link>
                <span className="mx-2">|</span>
                <Link to="/" onClick={logout}>
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="ms-2">
                  Login
                </Link>
                <span className="mx-2">|</span>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={SportBenchLogo} alt="" />
            <span className="ms-2 logo-title">Sport Bench</span>
          </Link>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-bottom">
            <li className="nav-item">
              <Link className="nav-link" to="/newproduct">
                NEW PRODUCT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                MAN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                WOMEN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                TOOLS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                KIDS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                LIMITED
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                BLOG
              </Link>
            </li>
          </ul>
          <form>
            <div className="input-group inner-addon right-addon">
              <input
                className="form-control"
                type="text"
                placeholder="search"
              />
              <i className="material-icons">&#xe8b6;</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}
