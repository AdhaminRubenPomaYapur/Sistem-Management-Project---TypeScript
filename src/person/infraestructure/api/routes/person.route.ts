import { Router } from "express";
import { personController } from "../../dependencies";


const personRoute = Router();

personRoute.get('/', personController.GET);
personRoute.get('/:uid', personController.GETBYID);
personRoute.put('/:uid', personController.PUT);
personRoute.delete('/:uid', personController.DELETE);

export { personRoute }