export interface IUserPost {
  username: string;
  fullname: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUserRequest {
  username: string;
  fullname: string;
  email: string;
  password: string;
  phone: string;
  isAdm?: boolean;
  createdOn?: Date;
  updatedOn?: Date;
  clients?: [];
}

export interface IUserCreated extends IUserRequest {
  id?: string;
  createdOn: Date;
  updatedOn: Date;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserUpdate {
  username?: string;
  fullname?: string;
  email?: string;
  password?: string;
  phone?: string;
}
