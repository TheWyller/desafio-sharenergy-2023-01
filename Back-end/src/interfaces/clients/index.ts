export interface IClientPost {
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

export interface IClientRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
  createdOn?: Date;
  updatedOn?: Date;
  userId?: string;
}

export interface IClientCreated extends IClientRequest {
  id?: string;
  created_at: Date;
  updated_at: Date;
}

export interface IClientUpdate {
  name?: string;
  address?: string;
  email?: string;
  phone?: string;
}
