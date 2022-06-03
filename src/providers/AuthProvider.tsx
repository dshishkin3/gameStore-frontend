import { FC, useState, useMemo, createContext, ReactNode } from "react";
import axios from "axios";

import { IAuthContext } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<null | string>(null);

  const login = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `https://gamestore4.herokuapp.com/auth/login`,
        {
          email,
          password,
        }
      );

      if (res.status === 201) {
        setAuth(!auth);
        setIsError(null);
        localStorage.setItem("token", res.data.token);
      }
    } catch (err: any) {
      setIsError("Ошибка при входе в аккаунт");
      console.log(err.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      isLoading,
      setIsLoading,
      login,
      auth,
      isError,
      setIsError,
    }),
    [auth, isLoading, email, password, isError]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
