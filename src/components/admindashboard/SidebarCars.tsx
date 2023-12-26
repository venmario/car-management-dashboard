// import CarContent from "./CarContent";
import { Outlet } from "react-router-dom";
import MenuHeading from "./MenuHeading";
import { CarContext } from "../../context/carContext";
import { useEffect, useState } from "react";
import { Car, Tfeedback } from "../../interfaces";
import instance from "../../api/axios";
import { AxiosError } from "axios";
import { useAuth } from "../../hooks/useAuth";

export default function SidebarCars() {
  useAuth();
  const token = localStorage.getItem("token");
  const [cars, setCars] = useState<Car[]>([]);
  const headers = {
    Authorization: `Bearer ${token}`
  };
  useEffect(() => {
    const fetchCars = async () => {
      const result = await instance.get(`/api/cars`, {
        headers
      });

      setCars(result.data);
    };

    fetchCars().catch((err) => {
      if (err instanceof AxiosError) {
        console.log(err);
      }
    });
  }, []);
  const saveCar = async (car: Car): Promise<Tfeedback> => {
    try {
      const data = {
        manufacture: car.manufacture,
        model: car.model,
        rentPerDay: car.rentPerDay,
        type: car.type,
        capacity: car.capacity,
        image: car.image,
        transmission: car.transmission,
        year: car.year
      };
      const result = await instance.post("/api/cars", data, {
        headers
      });
      if (result.status == 200) {
        const newCar: Car = { ...data, id: result.data.id };
        setCars([...cars, newCar]);
        return { type: "success", message: "Berhasil menambahkan data!" };
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status == 500) {
          return {
            type: "error",
            message: "Gambar mobil belum dipilih!"
          };
        } else {
          return { type: "error", message: err.response?.data };
        }
      } else if (err instanceof Error) {
        return { type: "error", message: err.message };
      }
    }

    return { type: "error", message: "Unexpected error" };
  };

  const updateCar = async (car: Car): Promise<Tfeedback> => {
    try {
      const data = {
        manufacture: car.manufacture,
        model: car.model,
        rentPerDay: car.rentPerDay,
        type: car.type,
        capacity: car.capacity,
        image: car.image,
        transmission: car.transmission,
        year: car.year
      };
      const result = await instance.patch(`/api/cars/${car.id}`, data, {
        headers
      });

      if (result.status == 200) {
        const idCar = car.id;
        const updatedCar: Car = { ...data, image: result.data.image };
        const newCars = cars.map((car: Car) => {
          if (car.id === idCar) {
            return {
              ...car,
              ...updatedCar
            };
          } else {
            return car;
          }
        });

        setCars(newCars);
        return { type: "success", message: "Berhasil mengubah data!" };
      }
    } catch (err) {
      console.error(err);
      if (err instanceof AxiosError) {
        return { type: "error", message: err.response?.data };
      } else if (err instanceof Error) {
        return { type: "error", message: err.message };
      }
    }

    return { type: "error", message: "Unexpected error" };
  };

  const getCar = (id: string): Car | undefined => {
    let aCar: Car | undefined;
    cars.forEach((car: Car) => {
      if (car.id === id) {
        aCar = car;
        return;
      }
    });
    return aCar;
  };
  return (
    <CarContext.Provider value={{ cars, saveCar, updateCar, getCar }}>
      <div className="side-bar bg-white">
        <MenuHeading>CARS</MenuHeading>
        <MenuHeading.SubMenu>List Cars</MenuHeading.SubMenu>
      </div>
      <div className="content overflow-scroll">
        <Outlet />
      </div>
    </CarContext.Provider>
  );
}
