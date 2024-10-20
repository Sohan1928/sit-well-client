import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularItemCart from "./PopularItemCart";

const PopularItem = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    fetch("/chair.json")
      .then((res) => res.json())
      .then((data) => setPopularItems(data));
  }, []);

  return (
    <div className="mx-auto my-8 max-w-7xl">
      <SectionTitle
        heading={"Popular Item"}
        subHeading={"Top Popular Products"}
      ></SectionTitle>

      <div
        data-aos="fade-up"
        data-aos-duration="1400"
        className="grid gap-4 mx-4 my-8 md:mx-8 md:grid-cols-3"
      >
        {popularItems
          .filter((item) => item.price > 300)
          .map((popularItem) => (
            <PopularItemCart
              key={popularItem.id}
              popularItem={popularItem}
            ></PopularItemCart>
          ))}
      </div>
    </div>
  );
};

export default PopularItem;
