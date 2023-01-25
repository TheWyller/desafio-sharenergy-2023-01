import mongoose from "mongoose";
import { IClientUpdate } from "../../interfaces/clients";
import Client from "../../models/Client";
import User from "../../models/User";

const clientUpdateServices = async (
  { name, address, email, phone }: IClientUpdate,
  id: string,
  userId: string
) => {
  const GetClient = mongoose.model("Client", Client);

  const client: any = await GetClient.find({ _id: id }).exec();

  if (client[0] === 0) {
    throw new Error("This id not exists");
  }

  if (name !== undefined) {
    await GetClient.updateOne(
      { _id: id },
      {
        name: name,
      }
    ).exec();
  }
  if (address !== undefined) {
    await GetClient.updateOne(
      { _id: id },
      {
        address: address,
      }
    ).exec();
  }

  if (email !== undefined) {
    await GetClient.updateOne(
      { _id: id },
      {
        email: email,
      }
    ).exec();
  }

  if (phone !== undefined) {
    await GetClient.updateOne(
      { _id: id },
      {
        phone: phone,
      }
    ).exec();
  }
  const newDate = new Date();

  await GetClient.updateOne(
    { _id: id },
    {
      updatedOn: newDate,
    }
  ).exec();

  const clientUpdated: any = await GetClient.find({ _id: id }).exec();

  return clientUpdated[0];
};

export default clientUpdateServices;
