import React from "react";
import "./HeroBanner.scss";

export default function HeroBanner() {
  return (
    <div className="container hero-banner">
      <div className="filter-hero-banner d-flex justify-content-center align-items-center">
        <div className="content text-center">
          <h1 className="text-uppercase">We empower you to be the best</h1>
          <p>
            Welcome to Sport Bench the fastest growing sports apparel store in
            Indonesia.
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
}
