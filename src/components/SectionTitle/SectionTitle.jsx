import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center">
      <p className="font-bold text-orange-500 uppercase">-- {heading} --</p>
      <h1 className="text-2xl font-bold text-blue-600 md:text-4xl">
        {subHeading}
      </h1>
    </div>
  );
};

export default SectionTitle;
