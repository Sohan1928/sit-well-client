import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Routes = () => {
  return (
    <div className="mx-auto">
      <Helmet>
        <title>Sit Well | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Routes;
