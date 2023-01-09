import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { IClient } from "../interfaces/clients.interfaces";
import { IGetAllClients } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";

export const GetAllClientsContext = createContext<IGetAllClients>(
  {} as IGetAllClients
);

export const GetAllClientsProvider = ({ children }: Ichildren) => {
  const [allClients, setAllClients] = useState([] as IClient[]);

  const getAll = () => {
    const token = localStorage.getItem("@Test_Tecnico:Token");

    if (token) {
      api
        .get("/clients", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setAllClients(res.data);
        })
        .catch((err) => toast.error("Algo aconteceu de errado!"));
    }
  };

  return (
    <GetAllClientsContext.Provider
      value={{ allClients, setAllClients, getAll }}
    >
      {children}
    </GetAllClientsContext.Provider>
  );
};
