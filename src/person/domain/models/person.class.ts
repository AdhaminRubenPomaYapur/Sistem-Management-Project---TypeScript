import { v4 as uuid } from "uuid";
import { RegisterPerson } from "../interfaces/person.interface";
import { Gender, Role } from "../enums/enums";

export class Person {
    public uid      : string;
    public name     : string;
    public lastname : string;
    public age      : number;
    public gender   : Gender;
    public photo    : string;
    public role     : Role;
    public state    : boolean;

    constructor({name, lastname, age, gender, role}: RegisterPerson) {
        this.uid      = uuid();
        this.name     = name;
        this.lastname = lastname;
        this.age      = age;
        this.gender   = gender;
        this.photo    = '';
        this.role     = role;
        this.state    = true;
    }
}