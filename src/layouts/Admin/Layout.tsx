import { Navbar } from "react-bootstrap";
export default function AdminLayout() {
  return (
    <Navbar sticky="top" style={{ height: "70px" }} className="p-0">
      <div
        className="bg-egypt-blue"
        style={{ height: "70px", width: "70px" }}
      ></div>
      <Navbar.Brand style={{ width: "220px" }} className="ps-3 m-0">
        Dashboard Admin
      </Navbar.Brand>
    </Navbar>
  );
}
