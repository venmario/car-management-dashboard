import { FormEvent, useContext, useState } from "react";
import FormCar from "./CarForm";
import { CarContext } from "../../context/carContext";
import {
  Car,
  CarContextType,
  EventTargetForm,
  Tfeedback,
} from "../../interfaces";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";

export default function EditCar() {
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const { getCar, updateCar } = useContext(CarContext) as CarContextType;

  const [feedback, setFeedback] = useState<Tfeedback | undefined>();
  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as unknown as EventTargetForm;
    const manufacture = target.elements.manufacture.value.toString();
    const model = target.elements.model.value.toString();
    const type = target.elements.type.value.toString();
    const image = target.elements.image.value.toString();
    const transmission = target.elements.transmission.value.toString();
    const rentPerDay = Number(target.elements.rentPerDay.value);
    const year = Number(target.elements.year.value);
    const capacity = Number(target.elements.capacity.value);

    const car: Car = {
      id,
      manufacture,
      model,
      type,
      image,
      rentPerDay,
      year,
      transmission,
      capacity,
    };
    setFeedback(undefined);
    if (isAuthenticated) {
      const carFeedback = await updateCar(car);
      setFeedback(carFeedback);
    }
  };
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item active className="body-12-bold text-dark">
          Cars
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="body-12-light text-dark">
          ListCars
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="body-12-light text-secondary">
          Edit Car
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="d-flex justify-content-between">
        <h3 className="heading-20-bold">Edit Car</h3>
      </div>
      <FormCar
        car={getCar(id!)}
        feedback={feedback}
        handleSubmit={handleSave}
      />
    </>
  );
}
