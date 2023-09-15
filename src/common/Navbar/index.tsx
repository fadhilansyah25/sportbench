import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import BrandLogo from "./BrandLogo/BrandLogo";
import MobileMenu from "./MobileMenu/MobileMenu";
import { menus } from "./const";
import NavItem from "./NavItem";

export default function Navbar() {
  const [isClose, setIsClose] = React.useState(true);

  return (
    <div className="fixed z-10 w-full border-b border-black bg-white p-4">
      <div className="container mx-auto flex justify-between gap-4">
        <BrandLogo />

        <div className="hidden md:flex">
          {menus.map((item, index) => (
            <NavItem
              key={`${item.title}-${index}`}
              title={item.title}
              uri={item.uri}
            />
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <SearchBar />

          <button
            className="rounded-[.02rem] border-[1px] border-black md:hidden"
            onClick={() => setIsClose(!isClose)}
          >
            <span className="material-icons-outlined px-3">menu</span>
          </button>
        </div>
      </div>

      {/* Nav Mobile Menu */}
      <MobileMenu
        initClose={isClose}
        toggleNavbar={() => setIsClose(!isClose)}
      />
    </div>
  );
}
