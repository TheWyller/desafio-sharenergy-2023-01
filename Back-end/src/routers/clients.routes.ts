import { Router } from "express";
import clientCreateControllers from "../controllers/clients/clientCreate.controller";
import clientDeleteSelfController from "../controllers/clients/clientDeleteSelf.controller";
import clientListControllers from "../controllers/clients/clientList.controllers";
import clientListOneController from "../controllers/clients/clientListOne.controller";
import clientUpdateController from "../controllers/clients/clientUpdate.controller";

import authUserMiddle from "../middlewares/authUser.middleware";
import isOwnMiddle from "../middlewares/isOwn.middleware";
import isClientExistsMiddle from "../middlewares/isClientExists.middleware";
import validationMiddleware from "../middlewares/validation.middleware";
import { clientSchema } from "../schemas/client.schemas";
import isClientOwnMiddle from "../middlewares/isClientOwn.middleware";

const routes = Router();

routes.post(
  "",
  authUserMiddle,
  validationMiddleware(clientSchema),
  clientCreateControllers
);
routes.get("", authUserMiddle, clientListControllers);
routes.get(
  "/:id",
  authUserMiddle,
  isClientExistsMiddle,
  isClientOwnMiddle,
  clientListOneController
);
routes.delete(
  "/:id",
  authUserMiddle,
  isClientExistsMiddle,
  isClientOwnMiddle,
  clientDeleteSelfController
);
routes.patch(
  "/:id",
  authUserMiddle,
  isClientExistsMiddle,
  isClientOwnMiddle,
  clientUpdateController
);

export default routes;
