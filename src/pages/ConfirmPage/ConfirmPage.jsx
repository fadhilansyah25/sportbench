import React from "react";
import { Link } from "react-router-dom";
import imageConfirm from "../../assets/agnieszka-boeske-cFdH_t5xBxk-unsplash.jpg";
import './ConfirmPage.scss'

export default function ConfirmPage() {
  return (
    <div className="confirm-page text-center container p-0 my-3">
      <h1 className="mt-4">Thanks for your transaction</h1>
      <img
        src={imageConfirm}
        style={{ maxHeight: "550px" }}
        className="img-fluid mx-auto"
        alt=""
      />
      <h5 className="text-center mt-3">
        We will inform you via email later once the transaction has been
        accepted
      </h5>
      <Link className="btn btn-primary mt-4" to="/">BACK TO HOME</Link>
    </div>
  );
}
