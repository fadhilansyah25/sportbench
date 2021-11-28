import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { GET_PRODUCTS } from "../../graphql/queries";

export default function ProductPage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { where: { id: { _eq: id } } },
  });

  console.log(data);

  const product = data?.sport_bench_products[0];

  return (
    <div className="container p-0">
      <div className="row">
        <div className="col">
          <img src={product?.product_image} className="img-fluid" alt="" />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
