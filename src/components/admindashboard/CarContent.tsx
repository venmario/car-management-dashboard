import { useContext, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Image, Row } from "react-bootstrap";
import { Edit, Plus, Trash } from "react-feather";
import { Car, CarContextType } from "../../interfaces";
import CarCard from "../dashboard/cars/CarCard";
import icalendar from "../../assets/icons/fi_calendar.svg";
import iusers from "../../assets/icons/fi_users.svg";
import iVector from "../../assets/icons/Vector.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CarContext } from "../../context/carContext";

export default function CarContent() {
  const [filter, setFilter] = useState<string>("all");
  const { cars } = useContext(CarContext) as CarContextType;
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const navigate = useNavigate();
  useAuth();
  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  useEffect(() => {
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
      <div className="d-flex justify-content-between align-items-center mb-3">
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
                <Image src={car.image} className="card-img-top card-img-car" />
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
                <CarCard.CardFooter className="d-flex gap-3">
                  <Button
                    variant="outline-danger"
                    className="body-14-bold flex-grow-1"
                  >
                    <Trash />
                    Delete
                  </Button>

                  <Button
                    variant="success"
                    className="body-14-bold flex-grow-1"
                    onClick={() =>
                      navigate(`/admin-dashboard/cars/${car.id}/edit`)
                    }
                  >
                    <Edit />
                    Edit
                  </Button>
                </CarCard.CardFooter>
              </CarCard>
            </Col>
          ))}
      </Row>
    </>
  );
}
