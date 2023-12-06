import { createBrowserRouter as Router } from "react-router-dom";
import Layout from "../layouts/Layout";
import ErrorPage from "../pages/error-page";
import LandingPage from "../pages/dashboard/LandingPage";
import Cars from "../pages/dashboard/Cars";
import Login from "../pages/Login";
import AdminLayout from "../layouts/Admin/Layout";
import SidebarDashboard from "../components/admindashboard/SidebarDashboard";
import SidebarCars from "../components/admindashboard/SidebarCars";
import CarContent from "../components/admindashboard/CarContent";
import PrivateRoutes from "../utils/privateRoutes";

const router = Router([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/admin-dashboard",
        element: <AdminLayout />,
        children: [
          {
            path: "/admin-dashboard",
            element: <SidebarDashboard />,
          },
          {
            path: "/admin-dashboard/cars",
            element: <SidebarCars />,
            children: [
              {
                path: "/admin-dashboard/cars",
                element: <CarContent />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
