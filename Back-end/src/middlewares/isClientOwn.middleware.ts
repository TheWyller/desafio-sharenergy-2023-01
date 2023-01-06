import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Client from "../models/Client";
import User from "../models/User";

export const isClientOwnMiddle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const userId = req.userId;
    const isAdm = req.isAdm;

    const GetClient = mongoose.model("Client", Client);
    const GetUser = mongoose.model("User", User);

    await GetClient.find({ _id: id }).exec();
    const user: any = await GetUser.find({ _id: userId }).exec();

    const isClientExists = user[0].clients.find((elem: any) => elem._id === id);

    if (isClientExists || isAdm) {
      next();
    } else {
      return res.status(401).json({ message: "You're not the owner" });
    }
  } catch (error) {
    return res.status(401).json({ message: "You're not the owner" });
  }
};

export default isClientOwnMiddle;
