import { Request, Response } from "express";
import clientUpdateServices from "../../services/clients/clientUpdate.services";

const clientUpdateController = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const userId = request.userId;
    const { name, email, phone, address } = request.body;
    const updatedClient = await clientUpdateServices(
      { name, email, phone, address },
      id,
      userId
    );
    return response
      .status(200)
      .json({ message: "Client updated", userdata: updatedClient });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default clientUpdateController;
