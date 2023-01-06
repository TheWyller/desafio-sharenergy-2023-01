import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { IContact } from "../interfaces/contacts.interfaces";
import { IGetAllContacts } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";

export const GetAllContactsContext = createContext<IGetAllContacts>(
  {} as IGetAllContacts
);

export const GetAllContactsProvider = ({ children }: Ichildren) => {
  const [allContacts, setAllContacts] = useState([] as IContact[]);

  const getAll = () => {
    const token = localStorage.getItem("@Test_Tecnico:Token");

    if (token) {
      api
        .get("/clients", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setAllContacts(res.data);
        })
        .catch((err) => toast.error("Algo aconteceu de errado!"));
    }
  };

  return (
    <GetAllContactsContext.Provider
      value={{ allContacts, setAllContacts, getAll }}
    >
      {children}
    </GetAllContactsContext.Provider>
  );
};
