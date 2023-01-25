import { Response, Request } from "express";
import clientCreateService from "../../services/clients/clientCreate.services";

const clientCreateControllers = async (
  request: Request,
  response: Response
) => {
  try {
    const userData = request.body;
    const userId = request.userId;
    const newClient = await clientCreateService(userData, userId);
    return response.status(201).json(newClient);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({ error: error.message });
    }
  }
};

export default clientCreateControllers;
