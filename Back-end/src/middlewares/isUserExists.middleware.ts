import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import User from "../models/User";

export const isUserExistsMiddle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const GetUser = mongoose.model("User", User);

    const user = await GetUser.find({ _id: id }).exec();

    if (user.length === 0) {
      return res.status(404).json({ message: "User not exist" });
    } else {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "User not exist" });
  }
};

export default isUserExistsMiddle;
