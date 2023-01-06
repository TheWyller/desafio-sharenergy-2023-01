import mongoose from "mongoose";
import Client from "../../models/Client";
import User from "../../models/User";

const clientDeleteSelfServices = async (id: string, userId: string) => {
  const GetUser = mongoose.model("User", User);
  const GetClient = mongoose.model("Client", Client);

  await GetClient.deleteOne({ _id: id });

  const theUser: any = await GetUser.find({ _id: userId }).exec();

  const newArray = theUser[0].clients.filter((elem: any) => elem !== id);

  await GetUser.updateOne(
    { _id: userId },
    {
      clients: newArray,
    }
  ).exec();

  return { message: "Account removed" };
};

export default clientDeleteSelfServices;
