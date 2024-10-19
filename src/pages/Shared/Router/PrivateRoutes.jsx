import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  //   if (loading) {
  //     return (
  //       <span className="loading loading-bars loading-lg bg-[#da8e00] text-center mx-auto flex my-12"></span>
  //     );
  //   }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
