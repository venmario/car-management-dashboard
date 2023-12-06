import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { IUser } from "../interfaces";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  interface IJwtPayload extends IUser {
    exp: number;
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = jwtDecode(token) as IJwtPayload;
      if (decode.exp && decode.exp * 2000 < Date.now()) {
        logout();
      } else {
        setIsAuthenticated(true);
        const authUser: IUser = {
          username: decode.username,
          email: decode.email,
        };
        setUser(authUser);
      }
    }
  }, []);

  const login = (token: string) => {
    verifyToken(token);
  };

  const verifyToken = (token: string) => {
    const baseUrl = import.meta.env.BASE_URL;
    axios
      .post(`${baseUrl}/login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        const decode = jwtDecode(token) as IJwtPayload;
        if (decode.exp && decode.exp * 2000 < Date.now()) {
          console.error("invalid token");
          return;
        }
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        const authUser: IUser = {
          username: decode.username,
          email: decode.email,
        };
        setUser(authUser);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          console.error(err.status);
          console.error(err.response);
        } else {
          console.error(err);
        }
      });
  };
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, login, logout };
};
