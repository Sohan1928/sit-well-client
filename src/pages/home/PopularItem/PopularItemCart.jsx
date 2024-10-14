import React from "react";

const PopularItemCart = ({ popularItem }) => {
  const { title, price, description, category, viewDetails, image } =
    popularItem;

  return (
    <div className="flex items-center gap-4 p-3 rounded-lg shadow-xl md:p-4">
      <div>
        <img
          className="h-[200px] md:h-[230px] shadow-md rounded-lg w-[450px]"
          src={image}
          alt="image coming soon"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="mb-1 font-bold md:text-xl md:mb-3">{title}</h1>
        <p className="md:mb-1 text-sm md:text-base h-[80px] md:h-[72px] overflow-hidden text-ellipsis">
          {description}
        </p>
        <p className="flex items-center gap-2">
          Category:{" "}
          <span className="items-center px-2 py-1 font-semibold text-white bg-green-600 rounded-full">
            {category}
          </span>
        </p>
        <p>
          Price: <span className="font-bold text-orange-500">${price}</span>
        </p>
        <button className="px-4 py-2 mt-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-orange-500">
          {viewDetails}
        </button>
      </div>
    </div>
  );
};

export default PopularItemCart;
