import { Link } from "react-router-dom";
import assets from "../../assets";

export default function BrandLogo() {
  return (
    <Link to="/" className="my-2 flex">
      <img src={assets.logo} alt="" className="object-contain" />
      <span className="ms-2 hidden text-xl font-bold text-blue-600 md:block">
        Sportbench
      </span>
    </Link>
  );
}
