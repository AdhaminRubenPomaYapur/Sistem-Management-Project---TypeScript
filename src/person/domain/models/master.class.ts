import { RegisterMaster } from "../interfaces/master.interface";
import { Role } from "../enums/enums";
import { Client } from "./client.class";
import { Person } from "./person.class";
import { Supplier } from "./supplier.class";

export class Master {
    public person    : Person;
    public client?   : Client;
    public supplier? : Supplier;

    constructor({
        name,
        lastname,
        age,
        gender,
        role,

        email,
        password,

        company,
        address
    }: RegisterMaster) {
        this.person   = new Person({name, lastname, age, gender, role});
        if( role === Role.Client )  this.client   = new Client({uid: this.person.uid, email, password});
        if( role === Role.Supplier) this.supplier = new Supplier({uid: this.person.uid, company, address});
    }
}