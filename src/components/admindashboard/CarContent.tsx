import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Image, Row } from "react-bootstrap";
import { Plus } from "react-feather";
import { Car } from "../../interfaces";
import CarCard from "../dashboard/cars/CarCard";
import icalendar from "../../assets/icons/fi_calendar.svg";
import iusers from "../../assets/icons/fi_users.svg";
import iVector from "../../assets/icons/Vector.svg";
import instance from "../../api/axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function CarContent() {
  const token = localStorage.getItem("token");
  const [filter, setFilter] = useState<string>("all");
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  useAuth();
  useEffect(() => {
    console.log("user effect awal");

    const fetchCars = async () => {
      const result = await instance.get(`/api/cars`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCars(result.data);
      setFilteredCars(result.data);
    };

    fetchCars().catch((err) => {
      if (err instanceof AxiosError) {
        console.log(err);
      }
    });
  }, []);

  useEffect(() => {
    console.log("use effect filter");

    const newCars = cars.filter((car) => {
      if (filter === "large") {
        return car.capacity == 6;
      } else if (filter === "medium") {
        return car.capacity > 3 && car.capacity < 6;
      } else if (filter === "small") {
        return car.capacity < 4;
      } else {
        return true;
      }
    });
    setFilteredCars(newCars);
  }, [filter]);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item active className="body-12-bold text-dark">
          Cars
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="body-12-light text-secondary">
          ListCars
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="d-flex justify-content-between">
        <h3 className="heading-20-bold">List Cars</h3>
        <Link
          to="/admin-dashboard/cars/create"
          className="btn btn-egypt-blue body-14-bold text-white"
        >
          <Plus />
          Add New Car
        </Link>
      </div>

      <div className="d-flex gap-2 mb-3">
        <Button
          variant="outline-primary"
          className={`body-14-bold ${
            filter == "all" ? "btn-egypt-blue" : "btn-outline-egypt-blue"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant="outline-primary"
          className={`body-14-bold ${
            filter == "small" ? "btn-egypt-blue" : "btn-outline-egypt-blue"
          }`}
          onClick={() => setFilter("small")}
        >
          Small
        </Button>
        <Button
          variant="outline-primary"
          className={`body-14-bold ${
            filter == "medium" ? "btn-egypt-blue" : "btn-outline-egypt-blue"
          }`}
          onClick={() => setFilter("medium")}
        >
          Medium
        </Button>
        <Button
          variant="outline-primary"
          className={`body-14-bold ${
            filter == "large" ? "btn-egypt-blue" : "btn-outline-egypt-blue"
          }`}
          onClick={() => setFilter("large")}
        >
          Large
        </Button>
      </div>

      <Row>
        {filteredCars &&
          filteredCars.map((car) => (
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
                  <p className="card-text body-14-light">{car.description}</p>
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
      </Row>
    </>
  );
}
