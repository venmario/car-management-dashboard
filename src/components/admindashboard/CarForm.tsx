import {
  Breadcrumb,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

export default function CarForm() {
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
          Add New Car
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="d-flex justify-content-between">
        <h3 className="heading-20-bold">Add New Car</h3>
      </div>

      <div>
        <FormGroup as={Row} className="mb-3">
          <FormLabel column md={2}>
            Nama
          </FormLabel>
          <Col md={7}>
            <FormControl type="text" />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="mb-3">
          <FormLabel column md={2}>
            Harga
          </FormLabel>
          <Col md={7}>
            <FormControl type="text" />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="mb-3">
          <FormLabel column md={2}>
            Foto
          </FormLabel>
          <Col md={7}>
            <FormControl type="text" />
          </Col>
        </FormGroup>
      </div>
    </>
  );
}
