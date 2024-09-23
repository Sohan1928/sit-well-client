import { createBrowserRouter } from "react-router-dom";
import Routes from "../../routes/Routes";
import Home from "../../pages/home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
