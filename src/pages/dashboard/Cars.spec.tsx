import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Cars from "./Cars";

describe("Cars Page", () => {
  beforeAll(() => {});
  it("should render cars page with form filter", () => {
    render(<Cars />, { wrapper: BrowserRouter });
    const filterCar = screen.getByTestId("filter-car");
    expect(filterCar).toBeInTheDocument();
  });

  it('should enable button "Cari Mobil" when driver selected', () => {
    render(<Cars />, { wrapper: BrowserRouter });
    const buttonCariMobil = screen.getByRole("button", { name: "Cari Mobil" });
    expect(buttonCariMobil).toHaveAttribute("disabled", "");

    const driverOptions: HTMLInputElement = screen.getByTestId("driver");
    fireEvent.change(driverOptions, { target: { value: "true" } });
    expect(buttonCariMobil).not.toHaveAttribute("disabled");

    expect(driverOptions.value).toBe("true");
  });
});
