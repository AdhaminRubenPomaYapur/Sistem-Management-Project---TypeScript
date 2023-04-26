import { Gender, Role } from "../enums/enums";

export interface MasterInterface {
    uid      : string;
    name     : string;
    lastname : string;
    age      : number;
    gender   : Gender;
    photo    : string;
    role     : Role;
    state    : boolean;

    email    : string;
    password : string;
    access   : Date;
    google   : boolean;

    company  : string;
    address  : string;
    geo      : string;
}

export type RegisterMaster = Omit<MasterInterface, 'state' | 'geo' | 'access' | 'uid' | 'photo' | 'google'>;
export type ViewMaster     = Omit<MasterInterface, 'state' | 'geo' | 'access' | 'uid'>;