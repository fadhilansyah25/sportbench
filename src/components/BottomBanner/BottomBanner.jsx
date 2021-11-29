import React from "react";
import { useNavigate } from "react-router";
import "./BottomBanner.scss";

export default function BottomBanner() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("./register")
  };

  return (
    <div className="bottom-banner">
      <div className="filter-bottom-banner d-flex align-items-center justify-content-center">
        <div className="content">
          <h4>REGISTER TO GET INTERESTING NEWS & PROMOTIONS</h4>
          <form onSubmit={handleSubmit}>
            <div className="mt-4 d-flex justify-content-center">
              <input
                type="text"
                name="fullname"
                className="form-control w-50"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn btn-primary w-25">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
