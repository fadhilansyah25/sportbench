import React from "react";
import "./BrandLogo.scss";
import PumaLogo from "../../assets/PUMA Logo.svg";
import NikeLogo from "../../assets/Nike Logo.svg";
import AdidasLogo from "../../assets/Adidas Ag Logo.svg";
import NewBalanceLogo from "../../assets/New Balance Logo.svg";
import AsicsLogo from "../../assets/ASICS America Logo.svg";
import UnderArmourLogo from "../../assets/Under Armour Logo.svg";

export default function BrandLogo() {
  return (
    <div className="brand-logo">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <img src={PumaLogo} alt="" />
        </div>
        <div>
          <img src={NikeLogo} alt="" />
        </div>
        <div>
          <img src={AdidasLogo} alt="" />
        </div>
        <div>
          <img src={NewBalanceLogo} alt="" />
        </div>
        <div>
          <img src={AsicsLogo} alt="" />
        </div>
        <div>
          <img src={UnderArmourLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
