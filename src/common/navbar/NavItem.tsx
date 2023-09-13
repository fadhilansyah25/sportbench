import React from "react";
import { Link } from "react-router-dom";

type Props = {
  isSubItem?: boolean;
  title: string;
  uri: string;
  openSubMenu?: () => void;
};

export default function NavItem({ isSubItem, title, uri, openSubMenu }: Props) {
  return (
    <div className={`flex justify-between items-center`}>
      <Link
        className={`${isSubItem ? "text-sm" : "text-xl"} capitalize`}
        to={uri}
      >
        {title}
      </Link>
      <button onClick={openSubMenu}>
        <span className="material-icons-outlined">chevron_right</span>
      </button>
    </div>
  );
}
