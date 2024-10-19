import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./layout/Main/Main";
import { HelmetProvider } from "react-helmet-async";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import AuthProvider from "./Providers/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
          <BackToTopButton></BackToTopButton>
        </HelmetProvider>
      </AuthProvider>
    </div>
  </StrictMode>
);
