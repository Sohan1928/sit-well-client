import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Digital Shopping!",
      "Marketing Strategy!",
      "Book Review!",
      "Chair Shopping!",
    ],
    loop: 0,
    deleteSpeed: 80,
    typeSpeed: 120,
  });

  return (
    <div className="w-screen pb-8 md:pb-0 md:h-screen banner-bg-image">
      <div className="items-center md:flex">
        <div className="">
          <div className="pt-8 ml-6 md:ml-12 md:pt-16">
            <h1 className="flex flex-col text-2xl font-bold text-white md:text-5xl">
              <span className="pr-2">
                Join to Our <span className="text-orange-500">{text}</span>
                <Cursor cursorColor="orange"></Cursor>
              </span>
            </h1>
          </div>
          <div className="ml-6 mr-6 text-white md:mr-0 md:ml-12">
            <p className="mt-8 text-white">
              "Welcome to Sit Well, where comfort meets style. Discover a range
              of ergonomically designed chairs that blend modern aesthetics with
              ultimate support, perfect for home or office. Sit comfortably,
              live better."
            </p>
          </div>
          <div className="mt-12 ml-6 join md:ml-12">
            <input
              className="py-3 pl-2 rounded-l-lg"
              type="text"
              name=""
              placeholder="example@gmail.com"
              id=""
            />
            <button className="bg-[#6256ca] px-2 font-bold text-white rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <img
            className="hidden md:flex"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1728589978/ivkobtuzwojbis2wawbi.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
