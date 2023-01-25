import { IUserLogin } from "../../interfaces/user";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../../models/User";

const userLoginServices = async ({ username, password }: IUserLogin) => {
  const GetUser = mongoose.model("User", User);

  const isUsernameExists = await GetUser.find({
    username: username,
  }).exec();

  if (isUsernameExists.length === 0) {
    throw new Error("Invalid username or password");
  }

  const user = isUsernameExists[0];
  if (!(await compare(password, user.password))) {
    throw new Error("Invalid username or password");
  }

  const token = jwt.sign(
    { id: user.id, isAdm: user.isAdm },
    String(process.env.JWT_SECRET),
    {
      expiresIn: "24h",
    }
  );

  return { token: token };
};

export default userLoginServices;
