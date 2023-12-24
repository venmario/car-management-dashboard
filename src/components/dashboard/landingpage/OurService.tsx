import React from "react";
import {
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row
} from "react-bootstrap";

import iCheck from "../../../assets/icons/checklist.svg";

export default function OurService(): React.JSX.Element {
  return (
    <section id="ourservice" data-testid="ourservice">
      <Container className="our-section py-5">
        <Row>
          <Col md={6}>
            <Image
              src="https://i.ibb.co/7y8Gf6C/img-service.png"
              alt="our-service-image"
              fluid
            />
          </Col>
          <Col md={6} className="pt-3 pt-md-0">
            <h3 className="heading-24-bold">
              Best Car Rental for any kind of trip in Surabaya!
            </h3>
            <p className="body-14-light">
              Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ListGroup variant="flush" className="our-section__right-list">
              <ListGroupItem className="border-0 body-14-light mb-2 ps-0">
                <Image src={iCheck} className="me-2" />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </ListGroupItem>
              <ListGroupItem className="border-0 body-14-light mb-2 ps-0">
                <Image src={iCheck} className="me-2" />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </ListGroupItem>
              <ListGroupItem className="border-0 body-14-light mb-2 ps-0">
                <Image src={iCheck} className="me-2" />
                Sewa Mobil Jangka Panjang Bulanan
              </ListGroupItem>
              <ListGroupItem className="border-0 body-14-light mb-2 ps-0">
                <Image src={iCheck} className="me-2" />
                Gratis Antar - Jemput Mobil di Bandara
              </ListGroupItem>
              <ListGroupItem className="border-0 body-14-light mb-2 ps-0">
                <Image src={iCheck} className="me-2" />
                Layanan Airport Transfer / Drop In Out
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
