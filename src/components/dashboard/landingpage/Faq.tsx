import { Accordion, Col, Container, Row } from "react-bootstrap";

export default function Faq(): React.JSX.Element {
  return (
    <section id="faq">
      <Container className="faq-section p-0 pb-5 px-3 px-md-0">
        <Row>
          <Col md={4}>
            <h3 className="heading-24-bold text-center text-md-start">
              Frequently Asked Question
            </h3>
            <p className="body-14-light text-center text-md-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </Col>
          <Col md={8}>
            <Accordion>
              <Accordion.Item
                eventKey="0"
                className="mb-3 border border-2 rounded overflow-hidden"
              >
                <Accordion.Header>
                  Apa saja syarat yang dibutuhkan?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="mb-3 border border-2 rounded overflow-hidden"
              >
                <Accordion.Header>
                  Berapa hari minimal sewa mobil lepas kunci?
                </Accordion.Header>

                <Accordion.Body>
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="mb-3 border border-2 rounded overflow-hidden"
              >
                <Accordion.Header>
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                className="mb-3 border border-2 rounded overflow-hidden"
              >
                <Accordion.Header>
                  Apakah Ada biaya antar-jemput?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="4"
                className="mb-3 border border-2 rounded overflow-hidden"
              >
                <Accordion.Header>
                  Bagaimana jika terjadi kecelakaan
                </Accordion.Header>
                <Accordion.Body>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
