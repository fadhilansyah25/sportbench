import React from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import { menus } from "./const";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import assets from "@/assets";

export default function Navbar() {
  const [isClose, setIsClose] = React.useState(true);

  return (
    <div className="sticky top-0 z-10 w-full border-b border-black bg-white p-4">
      <div className="container mx-auto flex justify-between gap-4">
        <BrandLogo />

        {/* Menu List for Dekstop */}
        <DesktopMenu />

        {/* SearchBar and Mobile Menu Button Container */}
        <div className="flex justify-end gap-4">
          <SearchBar />

          {/* Burger Button for Mobile Menu */}
          <MobileMenuButton onPress={() => setIsClose(!isClose)} />
        </div>
      </div>

      {/* Nav Mobile Menu */}
      <MobileMenu
        initClose={isClose}
        handleCloseMenu={() => setIsClose(!isClose)}
      />
    </div>
  );
}

const SearchBar = () => {
  return (
    <form className="flex justify-end rounded-[.02rem] border-[1px] border-black peer-focus:border-2">
      <input
        className="peer ms-2 text-sm outline-none sm:text-xs md:hidden"
        type="text"
        placeholder="Search Product"
      />
      <button type="submit" className="flex items-center px-2">
        <span className="material-icons">&#xe8b6;</span>
      </button>
    </form>
  );
};

const MobileMenuButton = ({ onPress = () => {} }: { onPress: () => void }) => (
  <button
    className="rounded-[.02rem] border-[1px] border-black md:hidden"
    onClick={onPress}
  >
    <span className="material-icons-outlined px-3">menu</span>
  </button>
);

const DesktopMenu = () => (
  <div className="hidden md:flex">
    {menus.map((item, index) => (
      <NavItem
        key={`${item.title}-${index}`}
        title={item.title}
        uri={item.uri}
      />
    ))}
  </div>
);

const BrandLogo = () => {
  return (
    <Link to="/" className="my-1 flex items-center">
      <img src={assets.logo} alt="" className="object-contain" />
      <span className="ms-2 hidden text-xl font-bold text-[#111111] lg:block">
        Sportbench
      </span>
    </Link>
  );
};
