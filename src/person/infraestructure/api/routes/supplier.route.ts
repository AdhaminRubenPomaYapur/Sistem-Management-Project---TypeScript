import { Router } from "express";
import { supplierController } from "../../dependencies";

const supplierRoute = Router();

supplierRoute.get('/', supplierController.GET);
supplierRoute.get('/:uid', supplierController.GETBYID);
supplierRoute.put('/:uid', supplierController.PUT);
supplierRoute.delete('/:uid', supplierController.DELETE);

export { supplierRoute }