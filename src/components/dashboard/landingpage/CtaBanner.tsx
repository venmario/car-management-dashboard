import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CtaBanner() {
  return (
    <section className="cta-banner-section py-5 px-3 px-md-0">
      <Container className="cta-banner py-5">
        <h1 className="text-center text-white mb-4 heading-24-bold hero-title">
          Sewa Mobil di Surabaya Sekarang
        </h1>
        <p className="text-white w-50 mx-auto text-center mb-5 body-14-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="text-center">
          <Link to="/cars" className="btn btn-success">
            Mulai Sewa Mobil
          </Link>
        </div>
      </Container>
    </section>
  );
}
