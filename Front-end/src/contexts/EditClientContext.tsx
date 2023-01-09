import { createContext, useState } from "react";
import { FieldValues } from "react-hook-form";

import { toast } from "react-toastify";

import { IEditClient } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";

export const EditClientContext = createContext<IEditClient>({} as IEditClient);

export const EditClientProvider = ({ children }: Ichildren) => {
  const [idClientData, setIdClientData] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const token = localStorage.getItem("@Test_Tecnico:Token");

  const editClient = (id: string, data: FieldValues) => {
    api
      .patch(`/clients/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Contato editado com sucesso");
      })
      .catch((err) => {
        toast.error("Contato NÃO foi editado!");
      });
  };

  return (
    <EditClientContext.Provider
      value={{
        idClientData,
        setIdClientData,
        editClient,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </EditClientContext.Provider>
  );
};
