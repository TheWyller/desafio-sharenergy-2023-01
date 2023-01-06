import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Client from "../models/Client";

export const isClientExistsMiddle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const GetClient = mongoose.model("Client", Client);
    const client = await GetClient.find({ _id: id }).exec();

    if (client.length === 0) {
      return res.status(404).json({ message: "Client not exist" });
    } else {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Client not exist" });
  }
};

export default isClientExistsMiddle;
