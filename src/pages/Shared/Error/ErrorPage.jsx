import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-600 mt-2">
          It looks like the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 font-bold hover:bg-[#b462e0] text-white rounded-md bg-[#b62eff] transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
