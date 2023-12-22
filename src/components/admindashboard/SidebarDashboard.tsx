import DashboardContent from "./DashboardContent";
import MenuHeading from "./MenuHeading";

export default function SidebarDashboard() {
  return (
    <>
      <div className="side-bar bg-white">
        <MenuHeading>DASHBOARD</MenuHeading>
        <MenuHeading.SubMenu>Dashboard</MenuHeading.SubMenu>
      </div>
      <div className="content overflow-scroll">
        <DashboardContent />
      </div>
    </>
  );
}
