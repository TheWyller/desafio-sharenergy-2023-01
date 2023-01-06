import mongoose from "mongoose";
import Client from "../../models/Client";

const clientlistService = async (userId: string) => {
  const GetClient = mongoose.model("Client", Client);

  const clients = await GetClient.find({ userId: userId }).exec();

  return clients;
};

export default clientlistService;
