import { RegisterClient } from "../interfaces/client.interface";

export class Client {
    public uid        : string;
    public email      : string;
    public password   : string;
    public access     : Date;
    public google     : boolean;
    public state      : boolean;

    constructor({uid, email, password}: RegisterClient) {
        this.uid      = uid;
        this.email    = email;
        this.password = password;
        this.access   = new Date();
        this.google   = false;
        this.state    = true;
    }
}