import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GET_PRODUCTS } from "../../graphql/queries";
import Footer from "../../components/Footer/Footer";
import BottomBanner from "components/BottomBanner/BottomBanner";
import ProductList from "components/ProductList/ProductList";
import "./ProductPage.scss";
import { useDispatch } from "react-redux";
import { setCheckout } from "redux/reducer";

export default function ProductPage() {
  const { id } = useParams();
  const { data } = useQuery(GET_PRODUCTS, {
    variables: { where: { id: { _eq: id } } },
  });
  const { data: dataRec } = useQuery(GET_PRODUCTS);
  const product = data?.sport_bench_products[0];
  const [formCheckout, setFormCheckout] = useState({ sizeType: "EUROPE" });
  const dispacth = useDispatch();

  console.log(formCheckout);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) {
      setFormCheckout({
        ...formCheckout,
        productId: product.id,
        productName: product.product_name,
        price: product.price,
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    setFormCheckout({ ...formCheckout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(setCheckout(formCheckout));
  };

  return (
    <>
      <div className="container p-0 product-page">
        <div className="row">
          <div className="col-7">
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
                    defaultValue={formCheckout.sizeType}
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
                    {formCheckout.sizeType === "EUROPE"
                      ? [38, 39, 40, 41, 42, 43, 44].map((i, idx) => (
                          <option key={idx} value={i}>
                            {i}
                          </option>
                        ))
                      : formCheckout.sizeType === "UK"
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
              <p className="mb-3">
                <strong>{product?.instock ? "IN STOCK" : "OUT STOCK"}</strong>
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
      <ProductList title="RECOMMENDED" data={dataRec}></ProductList>
      <BottomBanner></BottomBanner>
      <Footer></Footer>
    </>
  );
}
