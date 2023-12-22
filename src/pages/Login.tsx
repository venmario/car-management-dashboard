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
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import instance from "../api/axios";
import { useAuth } from "../hooks/useAuth";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Login(): React.JSX.Element {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin-dashboard");
    }
  }, [isAuthenticated]);
  async function handleLogin() {
    try {
      const result = await instance.post(`/login`, { email, password });
      const token = result.data.token;
      login(token);
    } catch (err) {
      if (err instanceof AxiosError) {
        console.error(err.response?.data["message"]);
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
                className="btn-egypt-blue d-block w-100 body-14-bold mb-3"
              >
                Sign In
              </Button>
              <div className="d-flex justify-content-center">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
