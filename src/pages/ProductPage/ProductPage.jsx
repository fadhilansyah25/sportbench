import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { GET_PRODUCTS } from "../../graphql/queries";
import Footer from "../../common/Footer/Footer";
import BottomBanner from "components/BottomBanner/BottomBanner";
import ProductList from "components/ProductList/ProductList";
import "./ProductPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCheckout } from "redux/reducer";

export default function ProductPage() {
  const { id } = useParams();
  const { data } = useQuery(GET_PRODUCTS, {
    variables: { where: { id: { _eq: id } } },
  });
  const { data: dataRec } = useQuery(GET_PRODUCTS);
  const product = data?.sport_bench_products[0];
  const [formPickProduct, setFormPickProduct] = useState({
    sizeType: "EUROPE",
    quantity: 1,
  });

  const currentUser = useSelector((state) =>
    state.currentUser ? JSON.parse(state.currentUser) : null
  );
  const expired = Date.now() > currentUser?.stsTokenManager?.expirationTime;

  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) {
      setFormPickProduct({
        ...formPickProduct,
        productId: product.id,
        productName: product.product_name,
        price: product.price,
        image: product.product_image,
        userId: currentUser?.uid,
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    setFormPickProduct({ ...formPickProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser && !expired) {
      dispacth(setCheckout(formPickProduct));
      navigate(`/product/checkout/${id}`);
    } else {
      navigate(`/login`);
    }
  };

  return (
    <>
      <div className="container p-0 product-page">
        <div className="row">
          <div className="col-7 py-5">
            <img src={product?.product_image} className="img-fluid" alt="" />
          </div>
          <div className="col-5 right-content">
            <p style={{ textTransform: "uppercase" }}>
              {product?.product_category?.category}
            </p>
            <h1>{product?.product_name}</h1>
            <p style={{ textTransform: "uppercase" }}>
              BLUE / BLACK / WHITE / YELLOW
            </p>
            <h5 className="mb-3">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(product?.price)}
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="size" className="form-label">
                  Select size
                </label>
                <div className="d-flex">
                  <select
                    className="form-select w-auto"
                    name="sizeType"
                    onChange={handleInputChange}
                    defaultValue={formPickProduct.sizeType}
                  >
                    <option value="EUROPE">EUROPE</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                  </select>
                  <select
                    className="ms-3 form-select w-auto"
                    name="sizeNumber"
                    onChange={handleInputChange}
                    defaultValue=""
                    required
                  >
                    <option disabled value="">
                      SIZE
                    </option>
                    {formPickProduct.sizeType === "EUROPE"
                      ? [38, 39, 40, 41, 42, 43, 44].map((i, idx) => (
                          <option key={idx} value={i}>
                            {i}
                          </option>
                        ))
                      : formPickProduct.sizeType === "UK"
                      ? [6, 7, 8, 9, 10, 11, 12, 13].map((i, idx) => (
                          <option key={idx} value={i}>
                            {i}
                          </option>
                        ))
                      : [7, 8, 9, 10, 11, 12, 13].map((i, idx) => (
                          <option key={idx} value={i}>
                            {i}
                          </option>
                        ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="size" className="form-label">
                  Select Color
                </label>
                <div className="d-flex">
                  <select
                    className="form-select w-auto"
                    name="color"
                    onChange={handleInputChange}
                    defaultValue=""
                    required
                  >
                    <option value="">COLOR</option>
                    <option value="BLUE">BLUE</option>
                    <option value="BLACK">BLACK</option>
                    <option value="WHITE">WHITE</option>
                    <option value="YELLOW">YELLOW</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  className="form-control"
                  value={formPickProduct.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <p className="mb-3">
                <strong>{product?.instock ? "IN STOCK" : "OUT STOCK"}</strong>
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
      <ProductList title="RECOMMENDED" data={dataRec} limit={8}></ProductList>
      <BottomBanner></BottomBanner>
      <Footer></Footer>
    </>
  );
}
