import { Router } from "express";
import { clientController } from "../../dependencies";

const clientRoute = Router();

clientRoute.get('/', clientController.GET);
clientRoute.get('/:uid', clientController.GETBYID);
clientRoute.put('/:uid', clientController.PUT);
clientRoute.delete('/:uid', clientController.DELETE);

export { clientRoute }