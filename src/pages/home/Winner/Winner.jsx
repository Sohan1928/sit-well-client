import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Winner = () => {
  return (
    <div className="px-6 mx-auto mb-10 max-w-7xl">
      <SectionTitle
        heading={"Best Customer"}
        subHeading={"Our Best Customer This Month"}
      ></SectionTitle>

      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="flex flex-col gap-12 mt-8 md:gap-36 md:flex-row"
      >
        <div className="mx-auto md:w-4/5 md:ml-8">
          <h1 className="text-2xl font-bold md:text-4xl">
            Congratulations Sohanur Rahman
          </h1>
          <p className="my-6 text-justify">
            <span className="font-bold">Sohanur Rahman</span> has been one of
            our most valued customers, consistently demonstrating trust and
            loyalty to our shop. His frequent purchases and positive feedback
            reflect his appreciation for the quality and service we strive to
            offer. Sohanur's continued support has inspired us to maintain the
            highest standards and keep improving to meet the expectations of
            exceptional customers like him. We are truly honored to have Sohanur
            Rahman as a part of our customer community, and we look forward to
            serving him in the future!
          </p>
          <p className="text-justify">
            Are you ready to showcase your talent and compete for amazing
            prizes? Participate in our contests and become our next winner!
          </p>
          <button className="px-4 py-2 mt-2 text-sm text-blue-500 rounded-sm hover:text-white hover:bg-orange-500">
            Learn More
          </button>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img
            className="md:h-[400px] md:w-[350px] rounded-b-full"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1728895198/chlvukldyfhfreqqhh1f.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Winner;
