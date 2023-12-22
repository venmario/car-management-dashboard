import {
  Alert,
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Image,
  Row,
} from "react-bootstrap";
import { Car, Tfeedback } from "../../interfaces";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface FormCarProps {
  car?: Car;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  feedback?: Tfeedback;
}
export default function FormCar({ car, handleSubmit, feedback }: FormCarProps) {
  const [imageUrl, setImageUrl] = useState<string>(car ? car.image : "");
  const [manufacture, setManufacture] = useState<string>(
    car ? car.manufacture : ""
  );
  const [type, setType] = useState<string>(car ? car.type : "");
  const [model, setModel] = useState<string>(car ? car.model : "");
  const [rentPerDay, setRentPerDay] = useState<number>(
    car ? car.rentPerDay : 0
  );
  const [year, setYear] = useState<number>(car ? car.year : 2023);
  const [capacity, setCapacity] = useState<number>(car ? car.capacity : 2);
  const [transmission, setTransmission] = useState<string>(
    car ? car.transmission : "manual"
  );
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [pending, setPending] = useState<string>("");
  const navigate = useNavigate();

  const handleInputImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const data = new FileReader();
      data.addEventListener("load", () => {
        if (data.result) {
          setImageUrl(data.result.toString());
        }
      });
      data.readAsDataURL(e.target.files[0]);
    }
  };

  const handleInputrentPerDay = (value: string) => {
    setRentPerDay(Number(value) ? Number(value) : 0);
  };
  const handleInputYear = (value: string) => {
    setYear(Number(value) ? Number(value) : 0);
  };
  const resetValue = () => {
    setImageUrl("");
    setManufacture("");
    setModel("");
    setType("");
    setTransmission("Manual");
    setYear(2023);
    setRentPerDay(0);
  };

  useEffect(() => {
    if (!feedback) {
      setError("");
      setSuccess("");
    } else {
      if (feedback?.type == "error") {
        setError(feedback.message);
      } else if (feedback?.type == "success") {
        setSuccess(feedback.message);
        if (!car) {
          resetValue();
        }
      }
      setPending("");
    }
  }, [feedback]);

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e);
        setPending("Loading...");
      }}
      className="p-3 mx-1 bg-white rounded mb-3"
    >
      <Row>
        {error && (
          <Alert variant="danger" onClose={() => setError("")} dismissible>
            {error}
          </Alert>
        )}
        {success && (
          <Alert variant="success" onClose={() => setSuccess("")} dismissible>
            {success}
          </Alert>
        )}
        {pending && <Alert variant="warning">{pending}</Alert>}
        <Col md={6}>
          <FormGroup as={Row} className="mb-3">
            <FormLabel column md={3} className="body-12-light">
              Manufacture
            </FormLabel>
            <Col md={9}>
              <FormControl
                className="body-12-light"
                type="text"
                name="manufacture"
                value={manufacture}
                onChange={(e) => setManufacture(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mb-3">
            <FormLabel column md={3} className="body-12-light">
              Model
            </FormLabel>
            <Col md={9}>
              <FormControl
                className="body-12-light"
                type="text"
                value={model}
                name="model"
                onChange={(e) => setModel(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mb-3">
            <FormLabel column md={3} className="body-12-light">
              Tipe
            </FormLabel>
            <Col md={9}>
              <FormControl
                className="body-12-light"
                type="text"
                value={type}
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mb-3">
            <FormLabel column md={3} className="body-12-light">
              Tahun
            </FormLabel>
            <Col md={9}>
              <FormControl
                className="body-12-light"
                type="text"
                value={year}
                name="year"
                onChange={(e) => handleInputYear(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mb-3">
            <FormLabel column md={3} className="body-12-light">
              Harga/hari
            </FormLabel>
            <Col md={9}>
              <FormControl
                className="body-12-light"
                type="text"
                value={rentPerDay}
                name="rentPerDay"
                onChange={(e) => handleInputrentPerDay(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mb-3">
            <FormLabel column md={3} className="body-12-light">
              Foto
            </FormLabel>
            <Col md={9}>
              <FormControl
                className="body-12-light"
                type="file"
                onChange={handleInputImage}
              />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mb-3">
            <FormLabel column md={3} className="body-12-light">
              Kapasitas
            </FormLabel>
            <Col md={9}>
              <FormControl
                className="body-12-light"
                type="number"
                value={capacity}
                name="capacity"
                min={2}
                max={6}
                onChange={(e) => setCapacity(Number(e.target.value))}
              />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mb-3">
            <FormLabel column md={3} className="body-12-light">
              Transmisi
            </FormLabel>
            <Col md={9}>
              <FormSelect
                className="body-12-light"
                value={transmission}
                name="transmission"
                onChange={(e) => setTransmission(e.target.value)}
              >
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </FormSelect>
            </Col>
          </FormGroup>
        </Col>
        <Col md={6} className="mb-3">
          {imageUrl && (
            <Image
              rounded
              fluid
              src={imageUrl}
              className="card-img-top card-img-car"
            />
          )}
          <FormControl type="hidden" name="image" value={imageUrl} />
        </Col>
        <div className="d-flex gap-3">
          <Button
            variant="outline-primary"
            className="btn btn-outline-egypt-blue body-14-bold bg-none"
            onClick={() => navigate("/admin-dashboard/cars")}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="btn btn-egypt-blue body-14-bold text-white"
          >
            Save
          </Button>
        </div>
      </Row>
    </Form>
  );
}
