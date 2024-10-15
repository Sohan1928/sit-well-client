import React from "react";
import Banner from "../Banner/Banner";
import PopularItem from "../PopularItem/PopularItem";
import Winner from "../Winner/Winner";
import TopBuyer from "../TopBuyer/TopBuyer";
import OurService from "../OurService/OurService";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularItem></PopularItem>
      <Winner></Winner>
      <TopBuyer></TopBuyer>
      <OurService></OurService>
    </div>
  );
};

export default Home;
