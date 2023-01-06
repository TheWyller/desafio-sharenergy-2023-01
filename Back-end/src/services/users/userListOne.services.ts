import mongoose from "mongoose";
import User from "../../models/User";

const userListOneServices = async (id: string) => {
  const GetUser = mongoose.model("User", User);

  const user = await GetUser.find({ _id: id }).exec();

  return user[0];
};

export default userListOneServices;
