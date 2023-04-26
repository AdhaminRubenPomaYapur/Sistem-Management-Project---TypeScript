import { RegisterMaster } from "../../domain/interfaces/master.interface";
import { Master } from "../../domain/models/master.class";
import { MasterRepository } from "../../domain/repositories/master.repository";
import { InterfaceServiceMaster } from "../interface/master.interface";

export class ServiceMaster implements InterfaceServiceMaster<RegisterMaster, Master> {

    constructor(
        private readonly masterRepository: MasterRepository<RegisterMaster, Master> 
    ){}

    async postEntity(tEntityQuery: RegisterMaster): Promise<Master | undefined> {
        const master = await this.masterRepository.postEntity(tEntityQuery);
        return master;
    }
    
}