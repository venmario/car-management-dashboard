import { AuthContext } from "../../context/authContext";
import { useAuth } from "../../hooks/useAuth";
import AdminLayout from "../../layouts/Admin/Layout";

export default function Dashboard() {
  const { user, setUser } = useAuth();
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <AdminLayout />
      </AuthContext.Provider>
    </>
  );
}
