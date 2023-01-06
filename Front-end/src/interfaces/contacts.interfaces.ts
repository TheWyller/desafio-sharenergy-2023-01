export interface IContact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
  created_at: Date;
  updated_at: Date;
}

export interface IEditContact {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IContactList {
  allContacts: IContact[];
}

export type EditProps = {
  setIsEdit: (val: boolean) => void;
};
