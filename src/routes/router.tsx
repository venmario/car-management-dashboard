import { createBrowserRouter as Router } from "react-router-dom";
import Layout from "../layouts/Layout";
import ErrorPage from "../pages/error-page";
import LandingPage from "../pages/dashboard/LandingPage";
import Cars from "../pages/dashboard/Cars";
import Login from "../pages/Login";
import AdminLayout from "../layouts/Admin/Layout";

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
    path: "/admin-dashboard",
    element: <AdminLayout />,
  },
]);

export default router;
