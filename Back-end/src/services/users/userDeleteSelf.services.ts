import mongoose from "mongoose";
import User from "../../models/User";

const userDeleteSelfServices = async (id: string) => {
  const GetUser = mongoose.model("User", User);
  await GetUser.deleteOne({ _id: id });

  return { message: "Account removed" };
};

export default userDeleteSelfServices;
