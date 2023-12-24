import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routerConfig } from "../routes/router";

describe("Layout Test", () => {
  const renderWithRoute = (route = "/") => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: [route]
    });
    return render(<RouterProvider router={router} />);
  };

  it("should render page not found", () => {
    renderWithRoute("/adasda");

    const navbar = screen.getByText(/not found/i);
    expect(navbar).toBeVisible();
  });
  it("should render layout component with navbar, footer, and landing page comp", () => {
    renderWithRoute("/");

    const navbar = screen.getByText(/binar rental car/i);
    expect(navbar).toBeVisible();
  });
  it("should render layout component with navbar, footer, and car filter comp", () => {
    renderWithRoute("/cars");

    const filterCar = screen.getByTestId("filter-car");
    expect(filterCar).toBeInTheDocument();
  });
});
