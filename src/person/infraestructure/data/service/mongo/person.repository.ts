import { Model } from "mongoose";
import { PersonInterface, UpdatedPerson } from "../../../../domain/interfaces/person.interface";
import { Person } from "../../../../domain/models/person.class";
import { PersonRepository } from "../../../../domain/repositories/person.repository";

export class RepositoryPerson implements PersonRepository<string, UpdatedPerson, Person> {

    constructor( private readonly modelPerson: Model<PersonInterface> ) {}

    async getListEntity(): Promise<Person[] | undefined> {
        const persons = await this.modelPerson.find();
        return persons;
    }
    async getEntityById(tEntityId: string): Promise<Person | undefined> {
        const person = await this.modelPerson.findOne({uid: tEntityId});
        if( !person ) return undefined;
        return person;
    }
    async putEntity(tEntityId: string, tEntityQuery: UpdatedPerson): Promise<Person | undefined> {
        const person = await this.modelPerson.findOneAndUpdate({uid: tEntityId}, tEntityQuery, { new: true })
        if( !person ) return undefined;
        return person;
    }
    async deleteEntity(tEntityId: string): Promise<string | undefined> {
        await this.modelPerson.findOneAndUpdate({uid: tEntityId}, {state: false}, {new: true});
        return `Person is drop sucessful`
    }
    
}