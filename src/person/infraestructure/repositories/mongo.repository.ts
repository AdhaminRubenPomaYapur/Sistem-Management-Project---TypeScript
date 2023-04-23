import { ViewPerson, RegisterPerson } from "../../domain/person.entity";
import { PersonRepository } from "../../domain/person.repository";
import { PersonValue } from "../../domain/person.value";
import PersonModel from "../models/person";

export class MongoRepository implements PersonRepository {
    async listPersons(): Promise<ViewPerson[] | null> {
        const persons = (await PersonModel.find()).filter(p => p.status);
        return persons;
    }
    async findPersonById(uuid: string): Promise<ViewPerson | null> {
        const person = await PersonModel.findOne({uid: uuid});
        if( person?.status === false ) return null;
        return person;
    }
    async registerPerson(person: RegisterPerson): Promise<ViewPerson | null> {
        const newPerson = new PersonValue(person);
        const personDB = await PersonModel.create(newPerson);
        return personDB;
    }
    async updatedPerson(uuid: string, person: RegisterPerson): Promise<string | null> {
        const personUpdate = await PersonModel.findOneAndUpdate({uid: uuid}, person, { new: true });
        return `Updated Sucessfull`;
    }
    async deletePerson(uuid: string): Promise<string | null> {
        const personDelete = await PersonModel.findOneAndUpdate({uid: uuid}, {status: false}, { new: true} );
        return `Delete Sucessfull`
    }
}