import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import User from "../models/User";

const usernameCheckMiddle = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userData = request.body;
    const GetUser = mongoose.model("User", User);

    const isUserNameExists = await GetUser.find({
      username: userData.username,
    }).exec();

    if (isUserNameExists.length > 0) {
      return response.status(400).json({ message: "UserName already exist" });
    } else {
      next();
    }
  } catch (error) {
    return response.status(400).json({ message: "Request error" });
  }
};

export default usernameCheckMiddle;
