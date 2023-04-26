import { RegisterSupplier } from "../interfaces/supplier.interface";

export class Supplier {
    public uid     : string;
    public company : string;
    public address : string;
    public geo     : string;
    public state   : boolean;

    constructor({uid, company, address}: RegisterSupplier) {
        this.uid     = uid;
        this.company = company;
        this.address = address;
        this.geo     = '';
        this.state   = true;
    }
}