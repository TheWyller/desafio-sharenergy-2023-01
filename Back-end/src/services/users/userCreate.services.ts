import { IUserCreated, IUserRequest } from "../../interfaces/user";
import { hash } from "bcryptjs";
import User from "../../models/User";
import { model } from "mongoose";

const userCreateService = async (userData: IUserRequest) => {
  const newUser: IUserRequest = {
    username: userData.username,
    fullname: userData.fullname,
    email: userData.email,
    phone: userData.phone,
    password: await hash(userData.password, 10),
    createdOn: new Date(),
    updatedOn: new Date(),
    clients: [],
  };

  const NewUser = model<IUserRequest>("User", User);

  const user: any = new NewUser(newUser);

  await user.save();

  const { password, __v, ...userNoPassword } = user._doc;

  return userNoPassword;
};

export default userCreateService;
