import { Request, Response } from "express";
import clientListOneServices from "../../services/clients/clientListOne.services";

const clientListOneController = async (
  request: Request,
  response: Response
) => {
  try {
    const id = request.params.id;
    const client = await clientListOneServices(id);
    return response.status(200).json(client);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default clientListOneController;
