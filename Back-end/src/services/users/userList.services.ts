import mongoose from "mongoose";
import User from "../../models/User";

const userlistService = async () => {
  const GetUser = mongoose.model("User", User);

  const users = await GetUser.find().exec();

  const newArray = users.map((elem: any) => {
    const { password, __v, ...allInfos } = elem._doc;
    return allInfos;
  });

  return newArray;
};

export default userlistService;
