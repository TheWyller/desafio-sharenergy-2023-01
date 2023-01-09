export interface IClient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
  created_at: Date;
  updated_at: Date;
}

export interface IEditClient {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IClientList {
  allClients: IClient[];
}

export type EditProps = {
  setIsEdit: (val: boolean) => void;
};
