import { Button, Col, Form, FormGroup, Image, Row } from "react-bootstrap";
import TextBox from "../components/Text/TextBox";
import TextView from "../components/Text/TextView";

export default function Login(): React.JSX.Element {
  return (
    <div className="">
      <Row className="m-0" style={{ height: "100dvh" }}>
        <Col sm={6} md={7} lg={8} className="d-none d-sm-block p-0">
          <Image
            src="https://i.ibb.co/dbWDRVZ/login-Admin.png"
            alt="login"
            className="image-login"
          />
        </Col>
        <Col sm={6} md={5} lg={4}>
          <div className="h-100 bg-light d-flex flex-column px-3 justify-content-center">
            <h5 className="heading-24-bold mb-4">Welcome, Admin BCR</h5>
            <Form>
              <FormGroup>
                <TextView typo="body" fontSize={14} weight="light">
                  Email
                </TextView>
                <TextBox
                  typo="body"
                  fontSize={12}
                  weight="light"
                  type="email"
                  placeholder="Email"
                  className="mb-3 border"
                />
              </FormGroup>
              <FormGroup>
                <TextView typo="body" fontSize={14} weight="light">
                  Password
                </TextView>
                <TextBox
                  typo="body"
                  fontSize={12}
                  weight="light"
                  type="password"
                  placeholder="6+ karakter"
                  className="mb-3"
                />
              </FormGroup>
              <Button className="btn-egypt-blue d-block w-100 body-14-bold">
                Sign In
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
