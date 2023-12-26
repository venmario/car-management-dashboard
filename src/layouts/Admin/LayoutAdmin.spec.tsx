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
import {
  getCars,
  login,
  protectedRest,
  responseLogin
} from "./responseMock/respMock";

vi.mock("jwt-decode", () => ({
  jwtDecode: () => ({
    "id": 1,
    "username": "superadmin",
    "email": "superadmin@gmail.com",
    "role": "superadmin",
    "iat": 1703483485,
    "exp": 9999999999
  })
}));

export const restHandler = [login, protectedRest, getCars];

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
  it("should render login page because unauthenticated", () => {
    renderWithRoute("/admin-dashboard");

    const el: HTMLImageElement = screen.getByAltText("login");
    expect(el.src).toContain("login-Admin");
  });
  it("should login before access admin dashboard", async () => {
    renderWithRoute("/login");

    const email: HTMLInputElement = screen.getByPlaceholderText("Email");
    fireEvent.change(email, { target: { value: "superadmin@gmail.com" } });

    const password: HTMLInputElement =
      screen.getByPlaceholderText("6+ karakter");
    fireEvent.change(password, { target: { value: "superadmin" } });

    const btnLogin = screen.getByRole("button", { name: "Sign In" });
    fireEvent.click(btnLogin);

    localStorage.setItem("token", responseLogin.token);
    expect(localStorage.getItem("token")).toBeDefined();
    expect(
      await screen.findByRole("button", { name: "superadmin" })
    ).toBeVisible();
  });

  it("should render list of cars in admin dashboard", async () => {
    renderWithRoute("/admin-dashboard/cars");

    expect(localStorage.getItem("token")).toBeDefined();
    expect(
      await screen.findByRole("button", { name: "superadmin" })
    ).toBeVisible();

    const buttonAll = screen.getByRole("button", { name: "All" });
    expect(buttonAll).toBeVisible();

    const buttonSmall = screen.getByRole("button", { name: "Small" });
    expect(buttonSmall).toBeVisible();

    const buttonMedium = screen.getByRole("button", { name: "Medium" });
    expect(buttonMedium).toBeVisible();

    const buttonLarge = screen.getByRole("button", { name: "Large" });
    expect(buttonLarge).toBeVisible();

    screen.debug();
  });
});
