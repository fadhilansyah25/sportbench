import React from "react";
import { useNavigate } from "react-router";
import "./CardProduct.scss";

export default function CardProduct(props) {
  const { data } = props;
  const navigate = useNavigate()

  const handleCardClik = () => {
    navigate(`/product/${data?.id}`)
  }

  return (
    <div className="card card-product"onClick={handleCardClik} style={{ width: "18rem" }}>
      <img src={data?.product_image} className="" alt="" />
      <div className="card-body">
        <p className="card-category">{data?.product_category?.category}</p>
        <p className="card-title">{data?.product_name}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-price">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(data?.price)}
          </p>
          <p className="card-ratings d-flex align-items-center">
            <span className="material-icons-outlined">star_border</span>
            <span>{data?.rating}</span>
          </p>
        </div>
        <p className="card-variant">4 variants</p>
      </div>
    </div>
  );
}
