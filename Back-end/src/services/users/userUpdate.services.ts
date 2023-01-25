import { hash } from "bcryptjs";
import mongoose from "mongoose";
import { IUserUpdate } from "../../interfaces/user";
import User from "../../models/User";

const userUpdateServices = async (
  { username, fullname, password: pass, email, phone }: IUserUpdate,
  id: string
) => {
  const GetUser = mongoose.model("User", User);

  if (username !== undefined) {
    await GetUser.updateOne(
      { _id: id },
      {
        username: username,
      }
    ).exec();
  }

  if (fullname !== undefined) {
    await GetUser.updateOne(
      { _id: id },
      {
        fullname: fullname,
      }
    ).exec();
  }

  if (pass !== undefined) {
    await GetUser.updateOne(
      { _id: id },
      {
        password: await hash(pass, 10),
      }
    ).exec();
  }
  if (email !== undefined) {
    await GetUser.updateOne(
      { _id: id },
      {
        email: email,
      }
    ).exec();
  }
  if (phone !== undefined) {
    await GetUser.updateOne(
      { _id: id },
      {
        phone: phone,
      }
    ).exec();
  }

  await GetUser.updateOne(
    { _id: id },
    {
      updatedOn: new Date(),
    }
  ).exec();

  const user: any = await GetUser.find({ _id: id }).exec();

  const { password, __v, ...userNoPassword } = user[0]._doc;

  return userNoPassword;
};

export default userUpdateServices;
