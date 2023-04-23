import { Router } from "express";
import { MockRepository } from "../repositories/mock.repository";
import { PersonCase } from "../../application/person.case";
import { PersonController } from "../controllers/person.controller";
import { MongoRepository } from "../repositories/mongo.repository";

const routerPerson = Router();

// Iniciar Repository Person
// const personRepository = new MockRepository();
const personRepository = new MongoRepository();

// Init use cases
const useCasePerson = new PersonCase(personRepository);

// Iniciar User Controller
const personController = new PersonController(useCasePerson);


routerPerson.get('/', personController.listPersons);

routerPerson.get('/:uuid', personController.getPersonById);

routerPerson.post('/', personController.createPerson);

routerPerson.put('/:uuid', personController.updatedPersons);

routerPerson.delete('/:uuid', personController.deletePerson)

export { routerPerson }