import { ViewPerson, RegisterPerson, PersonEntity } from "../../domain/person.entity";
import { PersonRepository } from "../../domain/person.repository";
import { PersonValue } from "../../domain/person.value";
import persons from '../data/person.json';

let personsMock: PersonEntity[] = persons as PersonEntity[];

export class MockRepository implements PersonRepository {
    async listPersons (): Promise<ViewPerson[] | null> {

        return personsMock.filter(p => p.status).map(({uid, name, lastname, age, status}) => {
            return {
                uid,
                name,
                lastname,
                age
            }
        });
        
    }
    async findPersonById(uuid: string): Promise<ViewPerson | null> {
        const person = personsMock.find( p => p.uid === uuid );
        if( person && person.status === true ) {
            const { status, ...returnPerson } = person;
            return returnPerson;
        }
        return null;
    }
    async registerPerson(person: RegisterPerson): Promise<ViewPerson | null> {
        const newPerson = new PersonValue(person);
        personsMock.push(newPerson);
        return newPerson;
    }
    async updatedPerson(uuid: string, person: RegisterPerson): Promise<string | null> {
        const index = personsMock.findIndex( p => p.uid === uuid );
        const nuevoMock = personsMock;
        nuevoMock[index] = new PersonValue(person);
        nuevoMock[index].uid = uuid;
        personsMock = nuevoMock;
        return `Updated Successful`;

    }
    async deletePerson(uuid: string): Promise<string | null> {
        const index = personsMock.findIndex( p => p.uid === uuid );
        const nuevoMock = personsMock;
        nuevoMock[index].status = false;
        personsMock = nuevoMock;
        return `Delete Successful`
    }

}