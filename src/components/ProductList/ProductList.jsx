import React from "react";
import CardProduct from "../CardProduct/CardProduct";

export default function ProductList(props) {
  return (
    <div className="container my-5">
      <h1 className="text-center"style={{fontSize: '2rem'}}>{props?.title}</h1>
      <div className="d-flex flex-wrap justify-content-between mt-5">
        {props?.data?.sport_bench_products.slice(0, props.limit).map((item, key) => (
          <CardProduct data={item} key={key}></CardProduct>
        ))}
      </div>
    </div>
  );
}