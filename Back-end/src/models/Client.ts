import { Schema } from "mongoose";
import { IClientRequest } from "../interfaces/clients";

const Client = new Schema<IClientRequest>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  createdOn: String,
  updatedOn: String,
  userId: String,
});

export default Client;
