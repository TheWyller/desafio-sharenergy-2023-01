import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILogin, ILoginData } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";
import { encryptData } from "../utils/crypt";
import { GetAllContactsContext } from "./GetAllContactsContext";

export const LoginContext = createContext<ILogin>({} as ILogin);

export const LoginProvider = ({ children }: Ichildren) => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({} as ILoginData);
  const [authenticated, setAuthenticated] = useState(false);

  const { getAll } = useContext(GetAllContactsContext);

  useEffect(() => {
    if (Object.keys(loginData).length > 0) {
      api
        .post("/login", loginData)
        .then((res) => {
          if (loginData.remember) {
            localStorage.setItem(
              "@Test_Tecnico:user",
              encryptData(loginData.username!)
            );
            localStorage.setItem(
              "@Test_Tecnico:pass",
              encryptData(loginData.password!)
            );
          } else {
            localStorage.removeItem("@Test_Tecnico:user");
            localStorage.removeItem("@Test_Tecnico:pass");
          }
          const { token } = res.data;
          localStorage.setItem("@Test_Tecnico:Token", token);
          toast.success("Login realizado com sucesso!");
          setAuthenticated(true);
          setLoginData({});
        })
        .then(() => {
          getAll();
          navigate("/", { replace: true });
        })
        .catch((err) => toast.error("Senha ou email errados"));
      setLoginData({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData, navigate]);

  return (
    <LoginContext.Provider
      value={{ setLoginData, authenticated, setAuthenticated }}
    >
      {children}
    </LoginContext.Provider>
  );
};
