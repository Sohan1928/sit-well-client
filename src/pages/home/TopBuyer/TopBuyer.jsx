import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Marquee from "react-marquee-slider";

const TopBuyer = () => {
  return (
    <div className="px-4 mx-auto my-10 md:px-8 max-w-7xl">
      <SectionTitle
        heading={"Top Buyer"}
        subHeading={"Best buyer of our shop"}
      ></SectionTitle>

      <Marquee>
        <div className="mt-10">
          <img
            className="w-40 h-40 mr-8 transition-all rounded-md md:h-72 md:w-72 hover:rotate-6"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1728922983/ftpicoqd8bgasjuz65xh.jpg"
            alt=""
          />
          <div className="text-center">
            <h2 className="text-xl font-bold">Joe Dev</h2>
            <p className="text-lg">Software Engineer</p>
          </div>
        </div>

        <div>
          <img
            className="w-40 h-40 mr-8 transition-all rounded-md md:h-72 md:w-72 hover:rotate-6"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1729013128/miaywfhugkk2kek2bgvf.png"
            alt=""
          />
          <div className="text-center">
            <h2 className="text-xl font-bold">Devid Loo</h2>
            <p className="text-lg">Head Chef</p>
          </div>
        </div>
        <div>
          <img
            className="w-40 h-40 mr-8 transition-all rounded-md md:h-72 md:w-72 hover:rotate-6"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1729013225/b0j1uofmkzqr0uv30y0j.jpg"
            alt=""
          />
          <div className="text-center">
            <h2 className="text-xl font-bold">Klark Naly</h2>
            <p className="text-lg">Web Developer</p>
          </div>
        </div>
        <div>
          <img
            className="w-40 h-40 mr-8 transition-all rounded-md md:h-72 md:w-72 hover:rotate-6"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1729013308/hvuhbo39thvqs93sla9c.jpg"
            alt=""
          />
          <div className="text-center">
            <h2 className="text-xl font-bold">Sofia Katherin</h2>
            <p className="text-lg">Software Engineer</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default TopBuyer;
