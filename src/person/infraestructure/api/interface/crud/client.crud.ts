import { DELETE, GET, PUT } from "../crud.methods";

export interface ClientCrud extends 
    GET,
    PUT,
    DELETE
{}