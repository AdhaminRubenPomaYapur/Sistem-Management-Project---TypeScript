import { Router } from "express";
import { personController } from "../dependencies";

const routerPerson = Router();

routerPerson.get('/', personController.listPersons);

routerPerson.get('/:uuid', personController.getPersonById);

routerPerson.post('/', personController.createPerson);

routerPerson.put('/:uuid', personController.updatedPersons);

routerPerson.delete('/:uuid', personController.deletePerson)

export { routerPerson }