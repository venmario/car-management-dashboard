import { Navbar } from "react-bootstrap";
import { Home, Truck } from "react-feather";
import { Link } from "react-router-dom";
export default function AdminLayout() {
  return (
    <header className="position-relative">
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
        <Link to="" className="mb-3 side-nav-link p-2">
          <Home />
          <span>Dashboard</span>
        </Link>
        <Link to="/admin-dashboard/cars" className="mb-3 side-nav-link p-2">
          <Truck />
          <span>Dashboard</span>
        </Link>
      </div>
      <div className="d-flex vh-100">
        <div className="side-bar bg-white"></div>
        <div className="content bg-light"></div>
      </div>
    </header>
  );
}
