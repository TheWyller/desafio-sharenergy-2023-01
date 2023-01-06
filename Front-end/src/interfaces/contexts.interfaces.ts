import { FieldValues } from "react-hook-form";
import { IContact } from "./contacts.interfaces";

export interface ILogin {
  authenticated: boolean;
  setLoginData: React.Dispatch<React.SetStateAction<{}>>;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ILoginData {
  username?: string;
  password?: string;
  remember?: boolean;
}

export interface ISignUp {
  setSignUpData: React.Dispatch<React.SetStateAction<{}>>;
}

export interface IGetAllContacts {
  getAll: () => void;
  setAllContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  allContacts: IContact[];
}
export interface ICreateContact {
  setCreateContactData: React.Dispatch<React.SetStateAction<{}>>;
}

export interface IEditContact {
  idContactData: string;
  setIdContactData: React.Dispatch<React.SetStateAction<string>>;
  editContact: (id: string, data: FieldValues) => void;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
