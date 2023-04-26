import { Router } from "express";
import { masterController } from "../../dependencies";

const masterRoute = Router();

masterRoute.post('/', masterController.POST);

export { masterRoute }