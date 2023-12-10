import {
  Col,
  Dropdown,
  DropdownButton,
  FormControl,
  Navbar,
  Row,
} from "react-bootstrap";
import { Home, Truck } from "react-feather";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function AdminLayout() {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    console.log("logged out");
  };
  return (
    <header className="position-relative admin-header overflow-hidden">
      <Navbar className="top-nav bg-light shadow pe-3">
        <div
          className="bg-egypt-blue"
          style={{ height: "70px", width: "70px" }}
        ></div>
        <Navbar.Brand style={{ width: "220px" }} className="ps-3 m-0">
          Dashboard Admin
        </Navbar.Brand>
        <Row className="ms-auto">
          <Col xs="auto">
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            {user && (
              <DropdownButton title={user.username} align="end">
                <Dropdown.Item eventKey="1" onClick={() => handleLogout()}>
                  Logout
                </Dropdown.Item>
              </DropdownButton>
            )}
          </Col>
        </Row>
      </Navbar>
      <div className="side-nav bg-egypt-blue">
        <NavLink
          end
          to="/admin-dashboard"
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
      <div className="sidebar-content-wrapper ">
        <Outlet />
      </div>
    </header>
  );
}
