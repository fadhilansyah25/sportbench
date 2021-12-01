import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./CheckoutPage.scss";
import LogoBCA from "../../assets/Bank Central Asia Logo.png";
import LogoMandiri from "../../assets/Bank Mandiri Logo.png";
import LogoBNI from "../../assets/Bank Negara Logo.png";
import { useMutation } from "@apollo/client";
import { INSERT_ORDER } from "graphql/queries";
import { uploadImageToFireBase } from "firebase";
import { useNavigate } from "react-router";

export default function CheckoutPage() {
  const [formCheckout, setFormCheckout] = useState({
    fullname: "",
    noTelephone: "",
    email: "",
    address: "",
    bank: "",
  });
  const [imageAsFile, setImageAsFile] = useState("");
  const imageInput = useRef(null);
  const checkoutProduct = useSelector((state) => state.checkoutProduct);
  const [insertOrder, { loading, error }] = useMutation(INSERT_ORDER);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormCheckout({ ...formCheckout, [e.target.name]: e.target.value });
  };

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUri = await uploadImageToFireBase(imageAsFile);
    await insertOrder({
      variables: {
        address: formCheckout.address,
        color: checkoutProduct.color,
        email: formCheckout.email,
        fullname: formCheckout.fullname,
        noTelephone: formCheckout.noTelephone,
        payment_image: imageUri,
        product_id: checkoutProduct.productId,
        quantity: checkoutProduct.quantity,
        size: `${checkoutProduct.sizeType}, ${checkoutProduct.sizeNumber}`,
        total: checkoutProduct.price * checkoutProduct.quantity,
        user_id: checkoutProduct.userId,
      },
    });
    console.log("Checkout Succesfull");
    navigate("/confirmTrans");
  };

  return (
    <div className="container checkout-page">
      <div className="row">
        <div className="col-6 p-5 left-content">
          <img
            src={checkoutProduct.image}
            style={{ maxHeight: "300px" }}
            className="d-block img-fluid justify-self-center mx-auto"
            alt=""
          />
          <h4 className="text-center my-3">{checkoutProduct.productName}</h4>
          <div className="d-flex justify-content-evenly">
            <div>
              <h5>Price</h5>
              <p>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                }).format(checkoutProduct?.price)}
              </p>
            </div>
            <div>
              <h5>Size</h5>
              <p>
                {checkoutProduct?.sizeType} {checkoutProduct?.sizeNumber}
              </p>
            </div>
            <div>
              <h5>Color</h5>
              <p>{checkoutProduct?.color}</p>
            </div>
            <div>
              <h5>Quantity</h5>
              <p>{checkoutProduct?.quantity}</p>
            </div>
          </div>
          <div className="text-center mx-auto mt-4">
            <h5>Total Checkout</h5>
            <p style={{ color: "#6600ff", fontSize: "20px" }}>
              <strong>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                }).format(checkoutProduct?.quantity * checkoutProduct.price)}
              </strong>
            </p>
          </div>
          <div className="d-flex justify-content-between mt-5">
            <div>
              <div
                className="d-flex align-items-end mb-2"
                style={{ height: "40px" }}
              >
                <img src={LogoBCA} alt="" />
              </div>
              <p>
                Sport Bench <br />
                <strong>450-666-0009</strong>
              </p>
            </div>
            <div>
              <div
                className="d-flex align-items-end mb-2"
                style={{ height: "40px" }}
              >
                <img src={LogoMandiri} alt="" />
              </div>
              <p>
                Sport Bench <br />
                <strong>028-306-8681</strong>
              </p>
            </div>
            <div>
              <div
                className="d-flex align-items-end mb-2"
                style={{ height: "40px" }}
              >
                <img src={LogoBNI} alt="" />
              </div>
              <p>
                Sport Bench <br />
                <strong>198-300-4494</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 right-content">
          <h1>Checkout</h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <div className="input-group inner-addon right-addon">
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formCheckout.fullname}
                  onChange={handleInputChange}
                  required
                />
                <span className="material-icons-outlined icons">person</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="noTelephone" className="form-label">
                No. Telephone
              </label>
              <div className="input-group inner-addon right-addon">
                <input
                  type="tel"
                  name="noTelephone"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formCheckout.noTelephone}
                  onChange={handleInputChange}
                  required
                />
                <span className="material-icons-outlined icons">phone</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="input-group inner-addon right-addon">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formCheckout.email}
                  onChange={handleInputChange}
                  required
                />
                <span className="material-icons-outlined icons">email</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="payment" className="form-label">
                Payment Proof
              </label>
              <input
                type="file"
                className="form-control"
                onChange={handleImageAsFile}
                ref={imageInput}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bank" className="form-label">
                Bank
              </label>
              <select
                className="form-select"
                name="bank"
                onChange={handleInputChange}
                value={formCheckout.bank}
                required
              >
                <option value="">Select Bank</option>
                <option value="BCA">BCA</option>
                <option value="MANDIRI">MANDIRI</option>
                <option value="BNI">BNI</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Shipping Address</label>
              <textarea
                className="form-control"
                name="address"
                value={formCheckout.address}
                rows="3"
                onChange={handleInputChange}
                placeholder="Enter your address"
                required
              ></textarea>
            </div>
            <button className="btn btn-primary mt-2">CHECKOUT</button>
          </form>
        </div>
      </div>
    </div>
  );
}
