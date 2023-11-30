import React, { useState } from "react";
import { Navbar, Container, Button, Offcanvas, Nav } from "react-bootstrap";

export default function Layout(): React.JSX.Element {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = (): void => setShow(true);
  const handleClose = (): void => setShow(false);

  return (
    <Navbar expand="lg" sticky="top" className="navbar-aliceblue py-4">
      <Container>
        <Navbar.Brand href="#">Binar Rental Car</Navbar.Brand>
        <Button
          className="navbar-toggler"
          type="button"
          aria-controls="offcanvasNavbar"
          onClick={handleShow}
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Offcanvas
          placement="end"
          responsive="lg"
          className="w-50"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="body-14-bold">BCR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="ms-2 body-14-reguler" href="#ourservice">
                Our Services
              </Nav.Link>
              <Nav.Item>
                <Nav.Link className="ms-2 body-14-reguler" href="#whyus">
                  Why Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ms-2 body-14-reguler" href="#testimonials">
                  Testimonials
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ms-2 body-14-reguler" href="#faq">
                  FAQ
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <a
                  className="btn btn-success body-14-bold ms-lg-3 py-2"
                  href="#"
                >
                  Registers
                </a>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}
