import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDoubleDown } from "react-icons/hi";

const OurService = () => {
  return (
    <div className="px-4 mx-auto my-6 max-w-7xl">
      <SectionTitle
        heading={"See the lineup"}
        subHeading={"How It Works"}
      ></SectionTitle>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="items-center justify-around mx-auto mt-6 text-center md:flex md:mt-12"
      >
        <div className="flex flex-col items-center p-2 border border-orange-300 rounded-md shadow-md md:w-60 md:h-80 shadow-orange-100">
          <img
            className="w-40"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1729018154/ejssajlnntc3qwtgufse.png"
            alt=""
          />
          <h2 className="mt-3 font-bold md:text-xl">Buy from our Shop</h2>
          <p className="md:w-44">Choose your product and buy this product.</p>
        </div>
        <HiChevronDoubleRight className="items-center hidden text-2xl font-bold md:text-7xl md:flex"></HiChevronDoubleRight>
        <HiChevronDoubleDown className="flex items-center justify-center mx-auto my-6 text-4xl font-bold text-center md:hidden"></HiChevronDoubleDown>
        <div className="flex flex-col items-center p-2 border border-orange-300 rounded-md shadow-md md:w-60 md:h-80 shadow-orange-100">
          <img
            className="w-40"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1729018168/cmyfmuwzllefy9svhk46.png"
            alt=""
          />
          <h2 className="mt-3 font-bold md:text-xl">Pay Bill</h2>
          <p className="md:w-44">Please pay your bill. And try next step.</p>
        </div>
        <HiChevronDoubleRight className="items-center hidden text-2xl font-bold md:text-7xl md:flex"></HiChevronDoubleRight>
        <HiChevronDoubleDown className="flex items-center justify-center mx-auto my-6 text-4xl font-bold text-center md:hidden"></HiChevronDoubleDown>
        <div className="flex flex-col items-center p-2 border border-orange-300 rounded-md shadow-md md:w-60 md:h-80 shadow-orange-100">
          <img
            className="w-40"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1729018321/hgb7jr8ct8aeq4viddaq.png"
            alt=""
          />
          <h2 className="mt-3 font-bold md:text-xl">Participate & Win</h2>
          <p className="md:w-44">
            Submit your entry and complete with others. Win amazing prizes and
            recognition!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
