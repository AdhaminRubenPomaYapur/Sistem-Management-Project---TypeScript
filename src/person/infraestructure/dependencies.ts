import { ServiceMaster } from "../application/service/master.service";
import { MasterController } from "./api/controllers/master.controller";
import { RepositoryMaster } from "./data/service/mongo/master.repository";

import ClientModel from "./data/models/mongo/client";
import PersonModel from "./data/models/mongo/person";
import SupplierModel from "./data/models/mongo/supplier";
import { RepositoryPerson } from "./data/service/mongo/person.repository";
import { ServicePerson } from "../application/service/person.service";
import { PersonController } from "./api/controllers/person.controller";
import { RepositoryClient } from "./data/service/mongo/client.repository";
import { ServiceClient } from "../application/service/client.service";
import { ClientController } from "./api/controllers/client.controller";
import { RepositorySupplier } from "./data/service/mongo/supplier.repository";
import { ServiceSupplier } from "../application/service/supplier.service";
import { SupplierController } from "./api/controllers/supplier.controller";

// Master
const repositoryMaster          = new RepositoryMaster(PersonModel, ClientModel, SupplierModel);
const serviceMaster             = new ServiceMaster(repositoryMaster);
export const masterController   = new MasterController(serviceMaster);

// Person
const repositoryPerson          = new RepositoryPerson(PersonModel);
const servicePerson             = new ServicePerson(repositoryPerson);
export const personController   = new PersonController(servicePerson);

// Client
const repositoryClient          = new RepositoryClient(ClientModel);
const serviceClient             = new ServiceClient(repositoryClient);
export const clientController   = new ClientController(serviceClient);

// Supplier
const repositorySupplier        = new RepositorySupplier(SupplierModel);
const serviceSupplier           = new ServiceSupplier(repositorySupplier);
export const supplierController = new SupplierController(serviceSupplier);