import { GET, PUT, DELETE } from '../crud.methods';

export interface PersonCrud extends 
    GET,
    PUT,
    DELETE
{}