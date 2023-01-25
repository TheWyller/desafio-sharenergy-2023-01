import { Schema } from "mongoose";
import { IUserRequest } from "../interfaces/user";

const User = new Schema<IUserRequest>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isAdm: {
    type: Boolean,
    required: false,
    default: false,
  },
  createdOn: {
    type: Date,
    required: false,
  },
  updatedOn: {
    type: Date,
    required: false,
  },
  clients: {
    type: Array,
    required: false,
  },
});

export default User;
