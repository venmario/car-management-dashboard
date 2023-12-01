import { Col, Container, Image, Row } from "react-bootstrap";
import icomplete from "/icons/icon_complete.svg";
import i24hrs from "/icons/icon_24hrs.svg";
import iprofessional from "/icons/icon_professional.svg";
import iprice from "/icons/icon_price.svg";

export default function WhyUs(): React.JSX.Element {
  return (
    <section id="whyus">
      <Container className="why-us-section pb-5">
        <h2 className="text-center text-md-start heading-24-bold">Why Us?</h2>
        <p className="text-center text-md-start">
          Mengapa harus pilih Binar Car Rental?
        </p>

        <div className="">
          <Row className="align-items-stretch">
            <Col md={3} className="mb-3 mb-md-0">
              <div className="card">
                <div className="card-icon mb-3">
                  <Image src={icomplete} />
                </div>
                <div className="card-title">
                  <h5 className="title-16-bold">Mobil Lengkap</h5>
                </div>
                <div className="card-content">
                  <p className="body-14-light">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </Col>

            <div className="col-md-3 mb-3 mb-md-0">
              <div className="card">
                <div className="card-icon mb-3">
                  <Image src={iprice} />
                </div>
                <div className="card-title">
                  <h5 className="title-16-bold">Harga Murah</h5>
                </div>
                <div className="card-content">
                  <p className="body-14-light">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <div className="card">
                <div className="card-icon mb-3">
                  <Image src={i24hrs} />
                </div>
                <div className="card-title">
                  <h5 className="title-16-bold">Layanan 24 Jam</h5>
                </div>
                <div className="card-content">
                  <p className="body-14-light">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <div className="card">
                <div className="card-icon mb-3">
                  <Image src={iprofessional} />
                </div>
                <div className="card-title">
                  <h5 className="title-16-bold">Sopir Profesional</h5>
                </div>
                <div className="card-content">
                  <p className="body-14-light">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
}
