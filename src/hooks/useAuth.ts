import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { IUser } from "../interfaces";
import { useNavigate } from "react-router-dom";
import instance from "../api/axios";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();
  interface IJwtPayload extends IUser {
    exp: number;
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = jwtDecode(token) as IJwtPayload;

      if (decode.exp && decode.exp * 1000 < Date.now()) {
        logout();
      } else {
        setIsAuthenticated(true);
        const authUser: IUser = {
          username: decode.username,
          email: decode.email
        };
        setUser(authUser);
      }
    }
  }, []);

  const login = (token: string) => {
    verifyToken(token);
  };

  const verifyToken = (token: string) => {
    instance
      .get(`/protected`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        const decode = jwtDecode(token) as IJwtPayload;

        if (decode.exp * 1000 < Date.now()) {
          logout();
          return;
        }
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        const authUser: IUser = {
          username: decode.username,
          email: decode.email
        };
        setUser(authUser);
        navigate("/admin-dashboard");
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
    navigate("/login");
  };

  return { isAuthenticated, user, login, logout };
};
