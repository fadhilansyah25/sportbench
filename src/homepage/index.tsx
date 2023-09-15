import BrandLogo from "./BrandLogo/BrandLogo";
import HeroBanner from "./HeroBanner";

export default function HomePage() {
  // const { data } = useQuery(GET_PRODUCTS, {variables: {order_by: {rating: "desc"}}});

  return (
    <>
      <HeroBanner></HeroBanner>
      {/* <BrandLogo></BrandLogo> */}
      {/* <ProductList data={data} title="POPULAR RIGHT NOW" limit={8}></ProductList> */}
      {/* <BottomBanner></BottomBanner>
      <Footer></Footer> */}
    </>
  );
}
