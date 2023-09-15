import HeroBanneImage from "../assets/hero-banner.jpg";

export default function HeroBanner() {
  return (
    <div className="container mx-auto">
      <div className="mx-[24px] h-[calc(100vh-70px)] sm:mx-0">
        <div className="flex h-full flex-col">
          <img
            className="h-full w-full flex-1 object-cover object-[47%]"
            src={HeroBanneImage}
            alt="Hero Banner Image"
          />
          <BannerDescription />
        </div>
      </div>
    </div>
  );
}

const BannerDescription = () => (
  <div className="my-5 flex flex-col sm:items-center">
    <h1 className="text-4xl font-bold capitalize tracking-normal text-gray-700 md:text-6xl">
      empower you{" "}
      <span className="uppercase tracking-tight text-black underline">
        stronger
      </span>
    </h1>
    <h5 className="mt-6 text-base first-letter:capitalize sm:mt-4 sm:text-[12px]">
      fastest growing sports apparel store in Indonesia.
    </h5>
    <div className="mt-6">
      <a className="bg-black px-6 py-2 text-sm font-medium text-white sm:text-xs">
        Shop Now
      </a>
    </div>
  </div>
);
