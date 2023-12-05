import { Navbar } from "react-bootstrap";
import { Home, Truck } from "react-feather";
import { NavLink, Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { IUser } from "../../interfaces";

interface AdminProps {
  user?: IUser;
}
export default function AdminLayout({ user }: AdminProps) {
  if (!user?.token) {
    return <Navigate to="/login" />;
  }
  return (
    <header className="position-relative admin-header">
      <Navbar className="top-nav bg-light shadow">
        <div
          className="bg-egypt-blue"
          style={{ height: "70px", width: "70px" }}
        ></div>
        <Navbar.Brand style={{ width: "220px" }} className="ps-3 m-0">
          Dashboard Admin
        </Navbar.Brand>
      </Navbar>
      <div className="side-nav bg-egypt-blue">
        <NavLink
          end
          to="/admin-dashboard/"
          className={({ isActive }) =>
            isActive ? "side-nav-link active p-2" : "side-nav-link p-2"
          }
        >
          <Home />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard/cars"
          className={({ isActive }) =>
            isActive ? "side-nav-link active p-2" : "side-nav-link p-2"
          }
        >
          <Truck />
          <span>Cars</span>
        </NavLink>
      </div>
      <div className="sidebar-content-wrapper">
        <Outlet />
      </div>
    </header>
  );
}
