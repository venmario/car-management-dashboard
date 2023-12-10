import { Alert, Button, Col, Container, Image, Row } from "react-bootstrap";
import FormFilter from "./FormFilter";
import { useState } from "react";
import CarCard from "./CarCard";
import { Car, EventTargetForm } from "../../../interfaces";
import icalendar from "../../../assets/icons/fi_calendar.svg";
import iusers from "../../../assets/icons/fi_users.svg";
import iVector from "../../../assets/icons/Vector.svg";
import instance from "../../../api/axios";

export default function CarFilter() {
  // state
  const [cars, setCars] = useState<Array<Car> | undefined>();
  const [error, setError] = useState<string | undefined>();
  // handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as unknown as EventTargetForm;
    const driver = target.elements.driver.value;
    const tanggal = target.elements.tanggal.value;
    const waktu = target.elements.waktu.value;
    const jumlah = target.elements.jumlah.value;

    const qString = `driver=${driver}&tanggal=${tanggal}&waktu=${waktu}&jumlah=${jumlah}`;

    try {
      const res = await instance.get(`/cars?${qString}`);
      setCars(res.data);
      setError(undefined);
    } catch (err) {
      if (err instanceof Error) {
        setCars(undefined);
        setError(err.message);
      }
    }
  };
  return (
    <section id="filter-car">
      <Container fluid="lg" className="pt-3 pt-lg-0 px-lg-5">
        <div className="filter">
          <FormFilter handleSubmit={handleSubmit} />
          <Row id="filtered-car">
            {cars &&
              cars.map((car) => (
                <Col key={car.id} md={6} lg={4} className="mb-3">
                  <CarCard>
                    <Image src={car.image} />
                    <CarCard.Body>
                      <h5 className="body-14-reguler">
                        {car.manufacture} {car.model}/{car.type}
                      </h5>
                      <h5 className="card-title title-16-bold">
                        Rp {car.rentPerDay} / hari
                      </h5>
                      <p className="card-text body-14-light">
                        {car.description}
                      </p>
                    </CarCard.Body>
                    <CarCard.List>
                      <CarCard.ListItem>
                        <Image src={iusers} className="me-2" alt="icon" />
                        {car.capacity} Orang
                      </CarCard.ListItem>
                      <CarCard.ListItem>
                        <Image src={iVector} className="me-2" alt="icon" />
                        {car.transmission}
                      </CarCard.ListItem>
                      <CarCard.ListItem>
                        <Image src={icalendar} className="me-2" alt="icon" />
                        {car.year}
                      </CarCard.ListItem>
                    </CarCard.List>
                    <CarCard.CardFooter>
                      <Button
                        variant="success"
                        size="lg"
                        className="d-block w-100 body-14-bold"
                      >
                        Pilih Mobil
                      </Button>
                    </CarCard.CardFooter>
                  </CarCard>
                </Col>
              ))}
            {cars && cars.length == 0 && (
              <p className="text-center text-muted">No cars available :(</p>
            )}
            {error && (
              <Alert variant="danger" className="text-center">
                {error}
              </Alert>
            )}
          </Row>
        </div>
      </Container>
    </section>
  );
}
