import { Col, Row } from "react-bootstrap";

export default function Hero(): React.JSX.Element {
  return (
    <section className="hero hero-aliceblue">
      <Row className="h-100 w-100 ms-0">
        <Col lg={6}>
          <div className="hero__left pt-lg-5">
            <h1 className="mt-5 heading-24-bold hero-title">
              Sewa & Rental Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="w-100 w-md-75 my-3 body-14-light">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a href="/cars" className="btn btn-success">
              Mulai Sewa Mobil
            </a>
          </div>
        </Col>
        <Col lg={6} className="position-relative hero__right py-3">
          <img
            src="https://i.ibb.co/wN6YJNV/ca.png"
            className="hero__right-img"
            alt="car"
          />
          <div className="hero__right-box"></div>
        </Col>
      </Row>
    </section>
  );
}
