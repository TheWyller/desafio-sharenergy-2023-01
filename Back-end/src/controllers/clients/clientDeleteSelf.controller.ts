import { Request, Response } from "express";
import clientDeleteSelfServices from "../../services/clients/clientDeleteSelf.services";

const clientDeleteSelfController = async (
  request: Request,
  response: Response
) => {
  try {
    const userId = request.userId;
    const id = request.params.id;
    await clientDeleteSelfServices(id, userId);
    return response.status(200).json();
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default clientDeleteSelfController;
