import React from "react";

export default function SearchBar() {
  return (
    <form className="search_bar">
      <input
        className="peer ms-2 flex-1 text-sm focus:outline-none"
        type="text"
        placeholder="Search Product"
      />
      <button type="submit" className="flex flex-1 items-center px-2">
        <span className="material-icons">&#xe8b6;</span>
      </button>
    </form>
  );
}
