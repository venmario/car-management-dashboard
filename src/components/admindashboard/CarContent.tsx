import axios from "axios";
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";

export default function CarContent() {
  const [filter, setFilter] = useState<string>("all");
  useEffect(() => {
    try {
      const res = await axios.get(`${baseUrl}/cars?${qString}`);
      setCars(res.data);
      setError(undefined);
    } catch (err) {
      if (err instanceof Error) {
        setCars(undefined);
        setError(err.message);
      }
    }
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
        <Button className="btn-egypt-blue body-14-bold text-white">
          <Plus />
          Add New Car
        </Button>
      </div>

      <div className="d-flex gap-2 ">
        <Button
          variant="outline-primary"
          className="body-14-bold btn-outline-egypt-blue"
        >
          All
        </Button>
        <Button
          variant="outline-primary"
          className="body-14-bold btn-outline-egypt-blue"
        >
          Small
        </Button>
        <Button
          variant="outline-primary"
          className="body-14-bold btn-outline-egypt-blue"
        >
          Medium
        </Button>
        <Button
          variant="outline-primary"
          className="body-14-bold btn-outline-egypt-blue"
        >
          Large
        </Button>
      </div>

      <Row>
        <Col></Col>
      </Row>
    </>
  );
}
