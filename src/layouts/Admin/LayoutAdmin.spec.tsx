import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
  createCar,
  getCars,
  login,
  protectedRest,
  responseLogin,
  updateCar
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

export const restHandler = [
  login,
  protectedRest,
  getCars,
  createCar,
  updateCar
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

    expect((await screen.findAllByTestId("card")).length).toBe(3);
  });

  it("should render form edit car", async () => {
    renderWithRoute("/admin-dashboard/cars");

    const buttonEdit = await screen.findByTestId("card-0");
    fireEvent.click(buttonEdit);

    expect(screen.getByRole("heading", { name: "Edit Car" })).toBeVisible();

    const image = screen.getByTestId("image");
    fireEvent.change(image, {
      target: {
        value:
          "https://res.cloudinary.com/dwy823csd/image/upload/v1703613900/avkwc15fz9fledfgikri.jpg"
      }
    });

    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(screen.getByText(/loading/i)).toBeVisible();

    expect(await screen.findByText(/berhasil/i)).toBeVisible();
  });

  it("should filter car by capacity", () => {
    renderWithRoute("/admin-dashboard/cars");

    const buttonAll = screen.getByRole("button", { name: "All" });
    fireEvent.click(buttonAll);
    expect(buttonAll).toHaveClass("btn-egypt-blue");

    const buttonSmall = screen.getByRole("button", { name: "Small" });
    fireEvent.click(buttonSmall);
    expect(buttonSmall).toHaveClass("btn-egypt-blue");

    const buttonMedium = screen.getByRole("button", { name: "Medium" });
    fireEvent.click(buttonMedium);
    expect(buttonMedium).toHaveClass("btn-egypt-blue");

    const buttonLarge = screen.getByRole("button", { name: "Large" });
    fireEvent.click(buttonLarge);
    expect(buttonLarge).toHaveClass("btn-egypt-blue");
  });

  it("should render form create car", async () => {
    renderWithRoute("/admin-dashboard/cars");

    expect(localStorage.getItem("token")).toBeDefined();
    expect(
      await screen.findByRole("button", { name: "superadmin" })
    ).toBeVisible();

    const buttonAddCar = screen.getByTestId("AddCar");
    fireEvent.click(buttonAddCar);

    expect(screen.getByRole("heading", { name: "Add New Car" })).toBeVisible();
  });

  it("should render create a new car", () => {
    renderWithRoute("/admin-dashboard/cars");

    const buttonAddCar = screen.getByTestId("AddCar");
    fireEvent.click(buttonAddCar);

    const manufacture = screen.getByTestId("manufacture");
    fireEvent.change(manufacture, { target: { value: "Audi" } });

    const model = screen.getByTestId("model");
    fireEvent.change(model, { target: { value: "S5" } });

    const type = screen.getByTestId("type");
    fireEvent.change(type, { target: { value: "Coupe" } });

    const year = screen.getByTestId("year");
    fireEvent.change(year, { target: { value: 2020 } });

    const rentPerDay = screen.getByTestId("rentPerDay");
    fireEvent.change(rentPerDay, { target: { value: 300000 } });

    const capacity = screen.getByTestId("capacity");
    fireEvent.change(capacity, { target: { value: 6 } });

    const transmission = screen.getByTestId("transmission");
    fireEvent.change(transmission, { target: { value: "Automatic" } });

    const image = screen.getByTestId("image");
    fireEvent.change(image, {
      target: {
        value:
          "https://res.cloudinary.com/dwy823csd/image/upload/v1702571317/haeazowck57ksokpapaj.jpg"
      }
    });

    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(screen.getByText(/loading/i)).toBeVisible();

    waitFor(() => expect(screen.findByText(/berhasil/i)).toBeVisible());
  });

  it("should logout from admin dashboard", async () => {
    renderWithRoute("/admin-dashboard");
    const buttonUser = await screen.findByRole("button", {
      name: "superadmin"
    });
    fireEvent.click(buttonUser);

    const buttonLogout = screen.getByRole("button", { name: "Logout" });
    expect(buttonLogout).toBeVisible();

    fireEvent.click(buttonLogout);
    expect(localStorage.getItem("token")).toBeNull();
  });
});
