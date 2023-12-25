import { fireEvent, render, screen } from "@testing-library/react";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routerConfig } from "../../routes/router";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

vi.mock("jwt-decode", () => ({ jwtDecode: () => ({ exp: 9999999999 }) }));
const response = {
  token:
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzdXBlcmFkbWluIiwiZW1haWwiOiJzdXBlcmFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzAzNDgzNDg1LCJleHAiOjE3MDM0ODUyODV9.Xs5xKgIltKrmfN_yn49vVSOr6yauI3GiyO8e5qgeQnq5hcnKvwXyJOtTo0TLcM8zPNj2suJ8_97XHHaVFTwIiZABoNLZfXrlCsFXBBpFLUY9cQIkWpPRNbc5krtaW_je_stOi9a8NAUgFLIiHwJg2ajPqk8TbtQKC2tmU5bmzrfuyje395RYnwZMg8Bvg7bCUtr8JC0kSk4_51e88c654TNz-dQlR0usc6mOg3adICozhN8Rn3YOiCExXz9bjcDNw0Gxzh5eejN8K65UmofmOQonGPl4fqw7g3s2hQMmcCdS5tN2EcUcBPf01XF7HAJcIFEovyTv40EJEYWVMyMtGJwbWgWCNGOHean71WPcX-Zkih5RVMo2u8qRrgTbv2-nePGgDDW4nixVJiJeJdTk4AV4Zgd8l-4AwRtu2BSVPHaaPnHsm2WIKB7OJS7c6EhuBQYJAIi9aYQSrU6PmDLdh9v_6xAlRpQGRPMFQ_A7odBUyAOS5VDfaU7OZZJob-ZFQOC3lqta4PJ7_1v3pyfIhILd3dgeMmljIQvXiimYNwMZHDxe_K3PpVcf9966kQF0dAo-F8-IAibkaGNVcysZFR14uu6b0-nuwD2er8mQJb-kqbfUiLZA8fmFylYZWohz-5ygTJ0VlPsYWuaEKXarPD7JjkECSqXBqTPTiZdOgS0"
};

export const restHandler = [
  http.post("https://bcr-restapi-mario.fly.dev/login", () => {
    return HttpResponse.json(response);
  }),
  http.get("https://bcr-restapi-mario.fly.dev/protected", () => {
    return HttpResponse.json({
      message: "token valid",
      status: 200
    });
  })
];

const server = setupServer(...restHandler);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => {
  server.close();
  localStorage.clear();
});

describe("Layout Admin Test", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  const renderWithRoute = (route = "/") => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: [route]
    });
    return render(
      <GoogleOAuthProvider clientId="229124352543-qgtig56p68bvurk27a54vl2jr12ct6qe.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    );
  };

  it("should login before access admin dashboard", async () => {
    renderWithRoute("/login");

    const email: HTMLInputElement = screen.getByPlaceholderText("Email");
    fireEvent.change(email, { target: { value: "superadmin@gmail.com" } });

    const password: HTMLInputElement =
      screen.getByPlaceholderText("6+ karakter");
    fireEvent.change(password, { target: { value: "superadmin" } });

    const btnLogin = screen.getByRole("button", { name: "Sign In" });
    fireEvent.click(btnLogin);

    screen.debug();
    // expect(localStorage.getItem("token")).toBe(true);
  });

  it("should render login page because unauthenticated", () => {
    renderWithRoute("/admin-dashboard");

    const el: HTMLImageElement = screen.getByAltText("login");
    expect(el.src).toContain("login-Admin");
  });
});
