import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./layout/Main/Main";
import { HelmetProvider } from "react-helmet-async";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      <HelmetProvider>
        <RouterProvider router={router} />
        <BackToTopButton></BackToTopButton>
      </HelmetProvider>
    </div>
  </StrictMode>
);
