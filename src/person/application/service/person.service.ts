import { UpdatedPerson } from "../../domain/interfaces/person.interface";
import { Person } from "../../domain/models/person.class";
import { PersonRepository } from "../../domain/repositories/person.repository";
import { InterfaceServicePerson } from "../interface/person.interface";

export class ServicePerson implements InterfaceServicePerson<string, UpdatedPerson, Person> {

    constructor( private readonly personRepository: PersonRepository <string, UpdatedPerson, Person> ) {}

    async getListEntity(): Promise<Person[] | undefined> {
        const persons = await this.personRepository.getListEntity();
        return persons;
    }
    async getEntityById(tEntityId: string): Promise<Person | undefined> {
        const person = await this.personRepository.getEntityById(tEntityId);
        return person;
    }
    async putEntity(tEntityId: string, tEntityQuery: UpdatedPerson): Promise<Person | undefined> {
        const person = await this.personRepository.putEntity(tEntityId, tEntityQuery);
        return person;
    }
    async deleteEntity(tEntityId: string): Promise<string | undefined> {
        const person = await this.personRepository.deleteEntity(tEntityId);
        return person;
    }

}