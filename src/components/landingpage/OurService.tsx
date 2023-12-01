import React from "react";
import {
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

import iCheck from "/icons/checklist.svg";

export default function OurService(): React.JSX.Element {
  return (
    <Container className="our-section py-5">
      <Row>
        <Col md={6}>
          <Image
            src="https://i.ibb.co/7y8Gf6C/img-service.png"
            alt="our-service-image"
            fluid
          />
        </Col>
        <Col md={6}>
          <h3 className="heading-24-bold">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h3>
          <p className="body-14-light">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ListGroup variant="flush" className="our-section__right-list">
            <ListGroupItem className="border-0 body-14-light mb-2">
              <Image src={iCheck} />
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </ListGroupItem>
            <li className="list-group-item border-0 body-14-light mb-2">
              <Image src={iCheck} />
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </li>
            <li className="list-group-item border-0 body-14-light mb-2">
              <Image src={iCheck} />
              Sewa Mobil Jangka Panjang Bulanan
            </li>
            <li className="list-group-item border-0 body-14-light mb-2">
              <Image src={iCheck} />
              Gratis Antar - Jemput Mobil di Bandara
            </li>
            <li className="list-group-item border-0 body-14-light mb-2">
              <Image src={iCheck} />
              Layanan Airport Transfer / Drop In Out
            </li>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
