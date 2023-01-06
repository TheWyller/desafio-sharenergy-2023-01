import { Response, Request } from "express";
import clientlistService from "../../services/clients/clientList.services";

const clientListControllers = async (request: Request, response: Response) => {
  try {
    const userId = request.userId;
    const listClients = await clientlistService(userId);
    return response.json(listClients);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default clientListControllers;
