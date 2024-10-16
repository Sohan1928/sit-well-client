import React from "react";

const CustomerFeedback = () => {
  return (
    <div className="py-16 mx-auto my-16 rounded-md bg-stone-100 max-w-7xl">
      <div className="text-center">
        <img
          className="h-20 mx-auto mb-4"
          src="http://res.cloudinary.com/du0uabbwo/image/upload/v1729084116/eg31yxordcgglh7a4mwd.png"
          alt=""
        />
        <h1 className="mb-6 text-2xl font-bold md:text-4xl">
          Customer Feedback
        </h1>
        <p className="px-4 mx-auto md:px-0 md:w-1/2 opacity-80">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          tempora iusto tenetur officiis id repudiandae. Placeat natus labore
          impedit unde?
        </p>
        <div className="mt-4 join md:ml-12">
          <input
            className="py-3 pl-4 border rounded-l-lg"
            type="text"
            name=""
            placeholder="example@gmail.com"
            id=""
          />
          <button className="bg-[#6256ca] px-2 font-bold text-white rounded-r-lg">
            Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
