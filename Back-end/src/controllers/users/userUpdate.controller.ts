import { Request, Response } from "express";
import userUpdateServices from "../../services/users/userUpdate.services";

const userUpdateController = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const { username, fullname, password, email, phone } = request.body;
    const updatedUser = await userUpdateServices(
      { username, fullname, password, email, phone },
      id
    );
    return response
      .status(200)
      .json({ message: "User updated", userdata: updatedUser });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userUpdateController;
