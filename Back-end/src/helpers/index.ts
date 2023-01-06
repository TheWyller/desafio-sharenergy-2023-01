import { hash } from "bcryptjs";
import "dotenv/config";
import mongoose, { model } from "mongoose";
import { IUserRequest } from "../interfaces/user";
import User from "../models/User";

export const createAdm = async () => {
  try {
    const password = process.env.ADM_PASSWORD || "123456";

    const GetUser = mongoose.model("User", User);

    const admUser = await GetUser.find({
      username: "desafiosharenergy",
    }).exec();

    if (admUser.length === 0) {
      const NewUser = model<IUserRequest>("User", User);
      const user: any = new NewUser({
        username: "desafiosharenergy",
        fullname: "Usuário Administrador",
        phone: "41999999999",
        email: "root@root.com",
        password: await hash(password, 10),
        createdOn: new Date(),
        updatedOn: new Date(),
        isAdm: true,
        clients: [],
      });
      await user.save();
      console.log("AdmUser Created");
    } else {
      console.log("AdmUser Already Created");
    }
  } catch (error) {
    console.log("Repository not ready yet");
  }
};
