import React from "react";
import "./Footer.scss";
import BcaLogo from "../../assets/Bank Central Asia Logo.png";
import MandiriLogo from "../../assets/Bank Mandiri Logo.png";
import BniLogo from "../../assets/Bank Negara Logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container d-flex justify-content-between">
        <div className="footer-list">
          <h5>SUPPORT</h5>
          <ul>
            <li>Delivery</li>
            <li>Payment</li>
            <li>About Your Account</li>
            <li>About product</li>
            <li>Returns and Refunds</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="footer-list">
          <h5>MY ACCOUNT</h5>
          <ul>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Cart</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div className="footer-list">
          <h5>ABOUT US</h5>
          <ul>
            <li>About Us</li>
            <li>Career</li>
            <li>Offline Store</li>
            <li>Whatsapp Shopping</li>
          </ul>
        </div>
        <div className="footer-list">
          <h5>CUSTOMER SERVICE</h5>
          <ul>
            <li>
              <strong>24 hours, monday - sunday</strong>
            </li>
            <li>Contact Us</li>
            <li>cs@sport-bench.com</li>
          </ul>
        </div>
        <div className="footer-list">
          <h5>PAYMENT</h5>
          <ul>
            <img className="me-1" src={BcaLogo} alt="" />
            <img className="mx-2" src={MandiriLogo} alt="" />
            <img className="ms-1" src={BniLogo} alt="" />
          </ul>
        </div>
      </div>
    </div>
  );
}
