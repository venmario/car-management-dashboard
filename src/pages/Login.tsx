import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Image,
  Row,
} from "react-bootstrap";
import TextView from "../components/Text/TextView";
import { useState } from "react";
import { AxiosError } from "axios";
import instance from "../api/axios";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login(): React.JSX.Element {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin() {
    const baseUrl = import.meta.env["VITE_BACKEND_URL"];
    try {
      // const result = await axios.post(`${baseUrl}/login`, { email, password });
      const result = await instance.post(`/login`, { email, password });
      const token = result.data.token;
      login(token);
      if (isAuthenticated) {
        navigate("/admin-dashboard");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.error(err.response.data["message"]);
      } else if (err instanceof Error) {
        console.error(err.message);
      }
    }
  }
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
        <Col sm={6} md={5} lg={4} className="p-0">
          <div className="h-100 bg-light d-flex flex-column px-5 justify-content-center">
            <h5 className="heading-24-bold mb-4">Welcome, Admin BCR</h5>
            <Form>
              <FormGroup>
                <TextView typo="body" fontSize={14} weight="light">
                  Email
                </TextView>
                <FormControl
                  type="email"
                  className="body-12-light mb-3 border"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <TextView typo="body" fontSize={14} weight="light">
                  Password
                </TextView>
                {/* <TextBox
                  typo="body"
                  fontSize={12}
                  weight="light"
                  type="password"
                  placeholder="6+ karakter"
                  className="mb-3"
                /> */}
                <FormControl
                  type="password"
                  className="body-12-light mb-3"
                  placeholder="6+ karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button
                onClick={() => handleLogin()}
                className="btn-egypt-blue d-block w-100 body-14-bold"
              >
                Sign In
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
