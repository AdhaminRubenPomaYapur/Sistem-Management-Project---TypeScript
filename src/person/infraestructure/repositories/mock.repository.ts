import { ViewPerson, RegisterPerson, PersonInterface } from "../../domain/interfaces/person.interface";
import { Person } from "../../domain/models/person.class";
import { RepositoryPerson } from "../../domain/repositories/person.repository";
import persons from '../data/person.json';

let personsMock: Person[] = persons as Person[];

export class MockRepository implements RepositoryPerson<string, Person> {
    async getListEntity(): Promise<Person[] | undefined> {
        return personsMock.filter(p => p.status).map(({uid, name, lastname, age, status}) => {
            return {
                uid,
                name,
                lastname,
                age,
                status
            }
        });
    }
    async getEntityById(tEntityId: string): Promise<Person | undefined> {
        const person = personsMock.find( p => p.uid === tEntityId );
        if( person && person.status === true ) {
            const { status, ...returnPerson } = person;
            return person;
        }
        return undefined;
    }
    async postEntity(tEntity: Person): Promise<Person | undefined> {
        const newPerson = new Person(tEntity);
        personsMock.push(newPerson);
        return newPerson;
    }
    async putEntity(tEntityId: string, tEntity: Person): Promise<Person | undefined> {
        const index = personsMock.findIndex( p => p.uid === tEntityId );
        const nuevoMock = personsMock;
        nuevoMock[index] = new Person(tEntity);
        nuevoMock[index].uid = tEntityId;
        personsMock = nuevoMock;
        if(!nuevoMock[index]) return undefined;
        return nuevoMock[index];
    }
    async deleteEntity(tEntityId: string): Promise<string | undefined> {
        const index = personsMock.findIndex( p => p.uid === tEntityId );
        const nuevoMock = personsMock;
        nuevoMock[index].status = false;
        personsMock = nuevoMock;
        if(!nuevoMock[index]) return undefined;
        return `Delete Successful`
    }

}