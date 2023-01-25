import mongoose, { model } from "mongoose";
import { IClientRequest } from "../../interfaces/clients";
import Client from "../../models/Client";
import User from "../../models/User";

const clientCreateService = async (
  clientData: IClientRequest,
  userId: string
) => {
  const GetUser = mongoose.model("User", User);

  const newClient = {
    name: clientData.name,
    email: clientData.email,
    phone: clientData.phone,
    address: clientData.address,
    cpf: clientData.cpf,
    createdOn: new Date(),
    updatedOn: new Date(),
    userId: userId,
  };

  const NewClient = model<IClientRequest>("Client", Client);

  const client: any = new NewClient(newClient);

  await client.save();

  const theUser: any = await GetUser.find({ _id: userId }).exec();

  const mergeArray = [...theUser[0].clients, String(client._doc._id)];

  await GetUser.updateOne(
    { _id: userId },
    {
      clients: mergeArray,
    }
  ).exec();

  return client;
};

export default clientCreateService;
