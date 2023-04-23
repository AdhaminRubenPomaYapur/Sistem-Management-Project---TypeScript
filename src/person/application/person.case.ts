import { RegisterPerson } from '../domain/person.entity';
import { PersonRepository } from "../domain/person.repository";
import { PersonValue } from "../domain/person.value";

export class PersonCase {
    constructor(private readonly personRepository: PersonRepository) {}

    public registerPerson = async (person: RegisterPerson) => {
        const personValue = new PersonValue(person);
        const personCreated = await this.personRepository.registerPerson(personValue);
        return personCreated;
    }

    public listPersons = async () => {
        const persons = await this.personRepository.listPersons();
        return persons;
    }

    public findPersonById = async (uuid: string) => {
        const person = await this.personRepository.findPersonById(uuid);
        return person;
    }

    public updatedPerson = async (uuid: string, person: RegisterPerson) => {
        const newPerson = await this.personRepository.updatedPerson(uuid, person);
        return newPerson;
    }

    public deletePerson = async (uuid: string) => {
        const person = await this.personRepository.deletePerson(uuid);
        return person;
    }

}