import React from "react";
import "./BottomBanner.scss";

export default function BottomBanner() {
  return (
    <div className="bottom-banner">
      <div className="filter-bottom-banner d-flex align-items-center justify-content-center">
        <div className="content">
          <h3>REGISTER TO GET INTERESTING NEWS & PROMOTIONS</h3>
          <form>
            <div className="mt-4 d-flex justify-content-center">
              <input
                type="text"
                name="fullname"
                className="form-control w-50"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary w-25">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
