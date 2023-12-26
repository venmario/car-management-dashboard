import { fireEvent, render, screen } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Cars from "./Cars";
import { filterCar } from "../../layouts/Admin/responseMock/respMock";
import { setupServer } from "msw/node";

export const restHandler = [filterCar];

const server = setupServer(...restHandler);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => {
  server.close();
});
describe("Cars Page", () => {
  function renderCarsComp() {
    render(<Cars />, { wrapper: BrowserRouter });
  }

  it("should render cars page with form filter", () => {
    renderCarsComp();
    const filterCar = screen.getByTestId("filter-car");
    expect(filterCar).toBeInTheDocument();
  });

  it('should enable button "Cari Mobil" when driver selected', () => {
    renderCarsComp();

    const buttonCariMobil = screen.getByRole("button", { name: "Cari Mobil" });
    expect(buttonCariMobil).toHaveAttribute("disabled", "");

    const driverOptions: HTMLInputElement = screen.getByTestId("driver");
    fireEvent.change(driverOptions, { target: { value: "true" } });
    expect(buttonCariMobil).not.toHaveAttribute("disabled");

    expect(driverOptions.value).toBe("true");
  });

  it("should change date input", () => {
    renderCarsComp();

    const inputTanggal: HTMLInputElement = screen.getByTestId("tanggal");
    fireEvent.change(inputTanggal, { target: { value: "2023-12-31" } });
    expect(inputTanggal.value).toBe("2023-12-31");
  });

  it("should change time input", () => {
    renderCarsComp();

    const inputWaktu: HTMLInputElement = screen.getByTestId("waktu");
    fireEvent.change(inputWaktu, { target: { value: "10" } });
    expect(inputWaktu.value).toBe("10");
  });

  it("should change capacity input", () => {
    renderCarsComp();

    const inputJumlah: HTMLInputElement = screen.getByTestId("jumlah");
    fireEvent.change(inputJumlah, { target: { value: "5" } });
    expect(inputJumlah.value).toBe("5");
  });

  it("should disable button 'Cari Mobil' when input capacity has invalid number format", () => {
    renderCarsComp();

    const inputJumlah: HTMLInputElement = screen.getByTestId("jumlah");
    fireEvent.change(inputJumlah, { target: { value: "asda" } });
    expect(inputJumlah.value).toBe("asda");
    const buttonCariMobil = screen.getByRole("button", { name: "Cari Mobil" });
    expect(buttonCariMobil).toHaveAttribute("disabled", "");
  });

  it("should display 3 cards of car", async () => {
    renderCarsComp();

    const driverOptions: HTMLInputElement = screen.getByTestId("driver");
    fireEvent.change(driverOptions, { target: { value: "true" } });

    const inputTanggal: HTMLInputElement = screen.getByTestId("tanggal");
    fireEvent.change(inputTanggal, { target: { value: "2023-12-31" } });

    const inputWaktu: HTMLInputElement = screen.getByTestId("waktu");
    fireEvent.change(inputWaktu, { target: { value: "10" } });

    const inputJumlah: HTMLInputElement = screen.getByTestId("jumlah");
    fireEvent.change(inputJumlah, { target: { value: "2" } });

    const buttonCariMobil = screen.getByRole("button", { name: "Cari Mobil" });

    fireEvent.click(buttonCariMobil);

    expect((await screen.findAllByTestId("card")).length).toBe(3);
  });
});
