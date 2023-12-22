import Hero from "../../components/dashboard/Hero";
import CarFilter from "../../components/dashboard/cars/CarFilter";

export default function Cars(): React.JSX.Element {
  return (
    <>
      <Hero path="/cars" />
      <CarFilter />
    </>
  );
}
