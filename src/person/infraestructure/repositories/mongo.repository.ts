import { PersonInterface } from "../../domain/interfaces/person.interface";
import { RepositoryPerson } from "../../domain/repositories/person.repository";
import { Person } from "../../domain/models/person.class";
import PersonModel from "../models/mongo/person";
import { Model } from "mongoose";


export class MongoRepository implements RepositoryPerson<string, Person> {

    constructor(private readonly model: Model<PersonInterface>) {
        this.model = PersonModel;
    }

    async postEntity(tEntity: Person): Promise<Person | undefined> {
        const newPerson = new Person(tEntity);
        const personDB  = await this.model.create(newPerson);
        return personDB;
    }
    async getListEntity(): Promise<Person[] | undefined> {
        const persons = (await this.model.find()).filter(p => p.status);
        return persons;
    }
    async getEntityById(tEntityId: string): Promise<Person | undefined> {
        const person = await this.model.findOne({uid: tEntityId});
        if( !person?.status ) return undefined;
        return person;
    }
    async putEntity(tEntityId: string, tEntity: Person): Promise<Person | undefined> {
        const personUpdate = await this.model.findOneAndUpdate({uid: tEntityId}, tEntity, { new: true });
        if( !personUpdate ) return undefined;
        return personUpdate;
    }
    async deleteEntity(tEntityId: string): Promise<string | undefined> {
        await this.model.findOneAndUpdate({uid: tEntityId}, {status: false}, {new: true});
        return `Drop person successful`;
    }

}