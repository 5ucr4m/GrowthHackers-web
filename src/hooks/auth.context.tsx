import React, { createContext, useState } from "react";
import { message } from "antd";
import { useMemo } from "react";
import { useCallback } from "react";
import api from "../services/api";
import {
  cleanWithLogoutUser,
  setLocalstorage,
  getLocalstorage,
} from "../utils/localstorage";

import {
  IAuthContextData,
  ILoginDTO,
  IRegisterDTO,
  IUser,
  IUserRegister,
} from "../types/auth";
import { LocalStorageTypes } from "../types/localstorage";

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

const returnLoggedUserFromStorage = () => {
  const user = getLocalstorage(LocalStorageTypes.USER);

  if (!!user) {
    return user as IUser;
  }

  return {} as IUser;
};

const returnTokenFromStorage = () => {
  const token = getLocalstorage(LocalStorageTypes.TOKEN);

  if (!!token) {
    return token;
  }

  return "";
};

export const AuthProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>(returnLoggedUserFromStorage);
  const [token, setToken] = useState<string>(returnTokenFromStorage);

  const isLogged = useMemo(() => !!token, [token]);

  const login = useCallback(async (data: ILoginDTO) => {
    setIsLoading(true);
    try {
      const { data: response } = await api.post<IUserRegister>(
        "/session",
        data
      );
      setToken(response.token);
      setUser(response.user);

      setLocalstorage(LocalStorageTypes.TOKEN, response.token);
      setLocalstorage(LocalStorageTypes.USER, response.user);
    } catch (e) {
      message.error("Usuário ou senha inválidos");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (data: IRegisterDTO) => {
    setIsLoading(true);
    try {
      await api.post("/users", data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setToken("");
    setIsLoading(false);
    cleanWithLogoutUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
