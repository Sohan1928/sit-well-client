import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home/Home";
import Shop from "../../pages/home/Shop/Shop";
import Collection from "../../pages/home/Collection/Collection";
import ContactUs from "../../pages/home/ContactUs/ContactUs";
import ErrorPage from "../../pages/Shared/Error/ErrorPage";
import Login from "../../pages/Shared/Login/Login";
import Routes from "../../pages/Shared/Router/Routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/collection",
        element: <Collection></Collection>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
