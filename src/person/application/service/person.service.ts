import { Person } from "../../domain/models/person.class";
import { RepositoryPerson } from "../../domain/repositories/person.repository";
import { InterfaceServicePerson } from "../interface/person.interface";

export class ServicePerson implements InterfaceServicePerson<string, Person> {

    constructor(private readonly repositoryPerson: RepositoryPerson<string, Person>) {}

    async getListEntity(): Promise<Person[] | undefined> {
        const persons = await this.repositoryPerson.getListEntity();
        return persons;
    }
    async getEntityById(tEntityId: string): Promise<Person | undefined> {
        const person = await this.repositoryPerson.getEntityById(tEntityId);
        return person;
    }
    async postEntity(tEntity: Person): Promise<Person | undefined> {
        const person = await this.repositoryPerson.postEntity(tEntity);
        return person;
    }
    async putEntity(tEntityId: string, tEntity: Person): Promise<Person | undefined> {
        const person = await this.repositoryPerson.putEntity(tEntityId, tEntity);
        return person;
    }
    async deleteEntity(tEntityId: string): Promise<string | undefined> {
        await this.repositoryPerson.deleteEntity(tEntityId);
        return `The person is drop successful`;
    }
    
}