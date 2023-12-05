import * as React from "react";
import { IUser } from "../interfaces";
type ContextType = {
  user?: IUser;
  saveUser: (user: IUser) => void;
};
export const UserContext = React.createContext<ContextType | null>(null);

interface UserProviderProps {
  children: React.ReactNode;
}
function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = React.useState<IUser>();

  const saveUser = (user: IUser) => {
    setUser(user);
  };

  return (
    // Setiap fungsi yang di expor ke dalam value={}
    // akan tersedia saat kita menggunakan provider
    <UserContext.Provider value={{ user, saveUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
