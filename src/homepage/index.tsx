// import { useQuery } from "@apollo/client";
// import { GET_PRODUCTS } from "graphql/queries";
// import React from "react";
import BrandLogo from "../common/BrandLogo/BrandLogo";
import HeroBanner from "../common/HeroBanner/HeroBanner";
import Navbar from "../common/Navbar/Navbar";
// import ProductList from "../components/ProductList/ProductList";
// import BottomBanner from "../components/BottomBanner/BottomBanner";
// import Footer from "../components/Footer/Footer";

export default function HomePage() {
  // const { data } = useQuery(GET_PRODUCTS, {variables: {order_by: {rating: "desc"}}});

  return (
    <>
      <HeroBanner></HeroBanner>
      <BrandLogo></BrandLogo>
      {/* <ProductList data={data} title="POPULAR RIGHT NOW" limit={8}></ProductList> */}
      {/* <BottomBanner></BottomBanner>
      <Footer></Footer> */}
    </>
  );
}
