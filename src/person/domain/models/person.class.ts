import { v4 as uuid } from "uuid";
import { RegisterPerson } from "../interfaces/person.interface";

export class Person {
    public uid      : string;
    public name     : string;
    public lastname : string;
    public age      : number;
    public status   : boolean;

    constructor({name, lastname, age}: RegisterPerson) {
        this.uid      = uuid();
        this.name     = name;
        this.lastname = lastname;
        this.age      = age;
        this.status   = true;
    }
}