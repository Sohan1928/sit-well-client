import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

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
