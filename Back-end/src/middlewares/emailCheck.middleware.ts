import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import User from "../models/User";

const emailCheckMiddle = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userData = request.body;
    const GetUser = mongoose.model("User", User);

    const isEmailExists = await GetUser.find({
      email: userData.email,
    }).exec();

    if (isEmailExists.length > 0) {
      return response.status(400).json({ message: "Email already exist" });
    } else {
      next();
    }
  } catch (error) {
    return response.status(400).json({ message: "Request error" });
  }
};

export default emailCheckMiddle;
