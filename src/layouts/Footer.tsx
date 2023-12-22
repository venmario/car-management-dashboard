import { Col, Container, ListGroup, Row, Image } from "react-bootstrap";
import iFacebook from "../assets/icons/icon_facebook.svg";
import iInstagram from "../assets/icons/icon_instagram.svg";
import iTwitter from "../assets/icons/icon_twitter.svg";
import iMail from "../assets/icons/icon_mail.svg";
import iTwitch from "../assets/icons/icon_twitch.svg";
export default function Footer(): React.JSX.Element {
  return (
    <footer>
      <Container className="footer-section py-5 px-3 px-md-0">
        <Row>
          <Col md={3} className="address body-14-light">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col md={3} className="navigation">
            <ListGroup
              variant="flush"
              className="list-group list-group-flush w-75 mx-md-auto"
            >
              <ListGroup.Item className="border-0 pt-0 ps-0">
                Our services
              </ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">Why Us</ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">
                Testimonial
              </ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">FAQ</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3} className="sosmed mb-3">
            <p className="body-14-light">Connect with us</p>
            <div className="sosmed-icons">
              <Image src={iFacebook} />
              <Image src={iInstagram} />
              <Image src={iTwitter} />
              <Image src={iMail} />
              <Image src={iTwitch} />
            </div>
          </Col>
          <Col md={3} className="copyright">
            <p className="body-14-light">Copyright Binar 2022</p>
            <div className="copyright-logo"></div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
