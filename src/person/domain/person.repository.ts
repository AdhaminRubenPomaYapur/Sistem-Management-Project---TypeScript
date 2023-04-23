import { ViewPerson, PersonEntity, RegisterPerson } from './person.entity';

export interface PersonRepository {
    listPersons()                                        : Promise<ViewPerson[]  | null>;
    findPersonById(uuid: string)                         : Promise<ViewPerson    | null>;
    registerPerson(person: RegisterPerson)               : Promise<ViewPerson    | null>;
    updatedPerson(uuid: string, person: RegisterPerson)  : Promise<string        | null>;
    deletePerson(uuid: string)                           : Promise<string        | null>;
}