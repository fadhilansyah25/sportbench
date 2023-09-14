import React from "react";
import "./style.css";
import SearchBar from "./SearchBar";
import BrandLogo from "./BrandLogo";
import MobileMenu from "./MobileMenu";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setCurrentUser } from "redux/reducer";
// import { logOutFirebaseAuth } from "firebase";

export default function Navbar() {
  // const currentUser = useSelector((state) =>
  //   state.currentUser ? JSON.parse(state.currentUser) : null
  // );

  // const expired = Date.now() > currentUser?.stsTokenManager?.expirationTime;
  // const dispatch = useDispatch();

  // const logout = async () => {
  //   await logOutFirebaseAuth();
  //   dispatch(setCurrentUser(null));
  // };

  const [isClose, setIsClose] = React.useState(true);

  return (
    <div className="w-full border-b border-black p-4">
      {/* <div className="justify-content-between flex max-w-full">
        <div className="flex">
          <div className="flex py-2 pe-3">
            <span className="material-icons-outlined">location_on</span>
            <Link to="/" className="ms-2">
              Find Store
            </Link>
          </div>
          <div className="track-order d-flex px-3 py-2">
            <Link to="/" className="">
              Track Order
            </Link>
          </div>
        </div>
        <div className="flex">
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
      </div> */}
      {/* Brand Logo */}
      <div className="flex justify-between">
        <BrandLogo />

        <SearchBar />

        <button
          className="rounded-[.02rem] outline outline-1"
          onClick={() => setIsClose(!isClose)}
        >
          <span className="material-icons-outlined px-3">menu</span>
        </button>
      </div>

      {/* Nav Mobile Menu */}
      <MobileMenu initClose={isClose} toggleNavbar={() => setIsClose(!isClose)} />
    </div>
  );
}
