import { Model } from "mongoose";

import { MasterRepository } from "../../../../domain/repositories/master.repository";
import { Master } from "../../../../domain/models/master.class";

import { PersonInterface } from "../../../../domain/interfaces/person.interface";
import { ClientInterface } from "../../../../domain/interfaces/client.interface";
import { SupplierInterface } from "../../../../domain/interfaces/supplier.interface";
import { RegisterMaster } from "../../../../domain/interfaces/master.interface";

import { Role } from "../../../../domain/enums/enums";

export class RepositoryMaster implements MasterRepository<RegisterMaster, Master> {

    constructor(
        private readonly modelPerson   : Model<PersonInterface>,
        private readonly modelClient   : Model<ClientInterface>,
        private readonly modelSupplier : Model<SupplierInterface>
    ) {}
    
    async postEntity(tEntityQuery: RegisterMaster): Promise<Master | undefined> {
        const master = new Master(tEntityQuery);
        await this.modelPerson.create(master.person);
        if ( master.person.role === Role.Client  ) await this.modelClient.create( master.client );
        if ( master.person.role === Role.Supplier) await this.modelSupplier.create( master.supplier );
        return master;
    }

}