import React from "react";
import Banner from "../Banner/Banner";
import PopularItem from "../PopularItem/PopularItem";
import Winner from "../Winner/Winner";
import TopBuyer from "../TopBuyer/TopBuyer";
import OurService from "../OurService/OurService";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner></Banner>
      <PopularItem></PopularItem>
      <Winner></Winner>
      <TopBuyer></TopBuyer>
      <OurService></OurService>
      <CustomerFeedback></CustomerFeedback>
    </div>
  );
};

export default Home;
