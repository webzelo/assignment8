import { createBrowserRouter } from "react-router";
import Root from "../Pages/Roots/Root";
import Home from "../Pages/Home/Home";
import Error from "../Components/Error/Error";
import AllApps from "../Pages/Apps/AllApps";
import Detalis from "../Pages/Detalis/Detalis";
import Installed from "../Pages/Installed/Installed";
import Loader from "../Components/Loader/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/details/:id",
        Component: Detalis,
      },
      {
        path: "/installation",
        Component: Installed,
      },
    ],
  },
]);
