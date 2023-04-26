import { RegisterClient } from "../../domain/interfaces/client.interface";
import { Client } from "../../domain/models/client.class";
import { ClientRepository } from "../../domain/repositories/client.repository";
import { InterfaceServiceClient } from "../interface/client.interface";

export class ServiceClient implements InterfaceServiceClient<string, RegisterClient, Client> {
    constructor(private readonly clientRepository: ClientRepository<string, RegisterClient, Client>) {}

    async getListEntity(): Promise<Client[] | undefined> {
        const clients = await this.clientRepository.getListEntity();
        return clients;
    }
    async getEntityById(tEntityId: string): Promise<Client | undefined> {
        const client = await this.clientRepository.getEntityById(tEntityId);
        return client;
    }
    async putEntity(tEntityId: string, tEntityQuery: RegisterClient): Promise<Client | undefined> {
        const client = await this.clientRepository.putEntity(tEntityId, tEntityQuery);
        return client;
    }
    async deleteEntity(tEntityId: string): Promise<string | undefined> {
        const client = await this.clientRepository.deleteEntity(tEntityId);
        return client;
    }
}