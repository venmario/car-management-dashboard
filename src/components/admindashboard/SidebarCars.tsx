import CarContent from "./CarContent";
import MenuHeading from "./MenuHeading";

export default function SidebarCars() {
  return (
    <>
      <div className="side-bar bg-white">
        <MenuHeading>CARS</MenuHeading>
        <MenuHeading.SubMenu>List Cars</MenuHeading.SubMenu>
      </div>
      <div className="content overflow-scroll">
        <CarContent />
      </div>
    </>
  );
}
