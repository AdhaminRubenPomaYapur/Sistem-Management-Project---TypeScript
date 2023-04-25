import { PersonController } from "./controllers/person.controller";
import { MongoRepository } from "./repositories/mongo.repository";
import PersonModel from "./models/mongo/person";
import { ServicePerson } from "../application/service/person.service";

// Init Repository Person
const personRepository = new MongoRepository(PersonModel);

// Init use cases
// const useCasePerson = new PersonCase(personRepository);
const servicePerson = new ServicePerson(personRepository);

// Iniciar User Controller
export const personController = new PersonController(servicePerson);