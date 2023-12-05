import UserProvider from "../../context/userContext";
import AdminLayout from "../../layouts/Admin/Layout";

export default function Dashboard() {
  return (
    <>
      <UserProvider>
        <AdminLayout />
      </UserProvider>
    </>
  );
}
