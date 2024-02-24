import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Photos from "../pages/Dashboard/Photos/Photos";
import Home from "../pages/Home/Home";
import Profile from "../pages/Home/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <>Hello World</>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/photos",
        element: <Photos></Photos>,
      },
    ],
  },
]);

export default router;
