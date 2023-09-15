export default function SearchBar() {
  return (
    <form className="flex justify-end rounded-[.02rem] border-[1px] border-black peer-focus:border-2">
      <input
        className="peer ms-2 text-sm outline-none md:hidden"
        type="text"
        placeholder="Search Product"
      />
      <button type="submit" className="flex items-center px-2">
        <span className="material-icons">&#xe8b6;</span>
      </button>
    </form>
  );
}
