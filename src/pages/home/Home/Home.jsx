import React from "react";
import Banner from "../Banner/Banner";
import PopularItem from "../PopularItem/PopularItem";
import Winner from "../Winner/Winner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularItem></PopularItem>
      <Winner></Winner>
    </div>
  );
};

export default Home;
