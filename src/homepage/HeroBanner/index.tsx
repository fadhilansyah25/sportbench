import HeroBanneImage from "../assets/hero-banner.jpg";

export default function HeroBanner() {
  return (
    <div className="container mx-auto">
      <div className="relative mx-[24px]">
        <div className="image_wrapper h-screen">
          <img
            className="w-full h-full object-cover object-center"
            src={HeroBanneImage}
            alt="Hero Banner Image"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Your Hero Text
          </h1>
        </div>
        {/* <div className="content text-center"> */}
        {/* <h1 className="text-uppercase">We empower you to be the best</h1> */}
        {/* <h5>
            Welcome to Sport Bench the fastest growing sports apparel store in
            Indonesia.
          </h5> */}
        {/* <button className="btn btn-primary">Shop Now</button> */}
        {/* </div> */}
      </div>
    </div>
  );
}
