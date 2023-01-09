import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ICreateClient } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";

export const CreateClientContext = createContext<ICreateClient>(
  {} as ICreateClient
);

export const CreateClientProvider = ({ children }: Ichildren) => {
  const navigate = useNavigate();

  const [CreateClientData, setCreateClientData] = useState({});

  const token = localStorage.getItem("@Test_Tecnico:Token");

  useEffect(() => {
    if (Object.keys(CreateClientData).length > 0) {
      api
        .post("/clients", CreateClientData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          toast.success("Contato criado com sucesso!");
          navigate("/Clients", { replace: true });
          setCreateClientData({});
        })
        .catch((err) => toast.error("Contato não foi criado"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CreateClientData]);

  return (
    <CreateClientContext.Provider value={{ setCreateClientData }}>
      {children}
    </CreateClientContext.Provider>
  );
};
