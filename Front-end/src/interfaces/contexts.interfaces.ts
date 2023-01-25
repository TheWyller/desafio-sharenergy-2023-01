import { FieldValues } from "react-hook-form";
import { IClient } from "./clients.interfaces";

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

export interface IGetAllClients {
  getAll: () => void;
  setAllClients: React.Dispatch<React.SetStateAction<IClient[]>>;
  allClients: IClient[];
}
export interface ICreateClient {
  setCreateClientData: React.Dispatch<React.SetStateAction<{}>>;
}

export interface IEditClient {
  idClientData: string;
  setIdClientData: React.Dispatch<React.SetStateAction<string>>;
  editClient: (id: string, data: FieldValues) => void;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
