import { v4 as uuid } from "uuid";
import { PersonEntity, RegisterPerson } from "./person.entity";

export class PersonValue implements PersonEntity {
    uid      : string;
    name     : string;
    lastname : string;
    age      : number;
    status   : boolean;

    constructor({name, lastname, age}: RegisterPerson) {
        this.uid      = uuid();
        this.name     = name;
        this.lastname = lastname;
        this.age      = age;
        this.status   = true;
    }
}