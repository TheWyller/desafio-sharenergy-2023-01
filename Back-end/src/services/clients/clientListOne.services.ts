import mongoose from "mongoose";
import Client from "../../models/Client";

const clientListOneServices = async (id: string) => {
  const GetClient = mongoose.model("Client", Client);

  const client = await GetClient.find({ _id: id }).exec();

  return client[0];
};

export default clientListOneServices;
