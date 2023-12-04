import { Breadcrumb, Button } from "react-bootstrap";
import { Plus } from "react-feather";

export default function DashboardContent() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item active className="body-12-bold text-dark">
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="body-12-light text-secondary">
          Library
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="d-flex justify-content-between">
        <h3 className="heading-20-bold">List Cars</h3>
        <Button className="btn-egypt-blue body-14-bold text-white">
          <Plus />
          Add New Car
        </Button>
      </div>
    </>
  );
}
