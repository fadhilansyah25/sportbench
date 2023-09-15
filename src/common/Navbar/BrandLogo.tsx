import { Link } from "react-router-dom";
import assets from "../../assets";

export default function BrandLogo() {
  return (
    <Link to="/" className="my-1 flex items-center">
      <img src={assets.logo} alt="" className="object-contain" />
      <span className="ms-2 hidden text-xl font-bold text-[#111111] lg:block">
        Sportbench
      </span>
    </Link>
  );
}
