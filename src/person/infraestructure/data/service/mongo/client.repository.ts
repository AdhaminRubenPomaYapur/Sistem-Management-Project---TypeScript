import { Model } from "mongoose";
import { ClientInterface, RegisterClient } from "../../../../domain/interfaces/client.interface";
import { Client } from "../../../../domain/models/client.class";
import { ClientRepository } from "../../../../domain/repositories/client.repository";
import ClientModel from "../../models/mongo/client";

export class RepositoryClient implements ClientRepository<string, RegisterClient, Client> {
    constructor( private readonly modelClient: Model<ClientInterface>) {
        this.modelClient = ClientModel;
    }

    async getListEntity(): Promise<Client[] | undefined> {
        const clients = await this.modelClient.find();
        return clients;
    }
    async getEntityById(tEntityId: string): Promise<Client | undefined> {
        const client = await this.modelClient.findOne({uid: tEntityId});
        if( !client ) return undefined;
        return client;
    }
    async putEntity(tEntityId: string, tEntityQuery: RegisterClient): Promise<Client | undefined> {
        const client = await this.modelClient.findOneAndUpdate({uid: tEntityId}, tEntityQuery, { new: true });
        if( !client ) return undefined;
        return client;
    }
    async deleteEntity(tEntityId: string): Promise<string | undefined> {
        await this.modelClient.findOneAndUpdate({uid: tEntityId}, {state: false}, {new: true});
        return `The client is drop sucessfull`
    }
}