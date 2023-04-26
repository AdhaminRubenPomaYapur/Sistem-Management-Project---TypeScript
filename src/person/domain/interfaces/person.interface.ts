import { Gender, Role } from "../enums/enums";

export interface PersonInterface {
    uid      : string;
    name     : string;
    lastname : string;
    age      : number;
    gender   : Gender;
    photo    : string;
    role     : Role;
    state    : boolean;
}

export type RegisterPerson = Omit<PersonInterface, 'state' | 'uid' | 'photo'>;
export type UpdatedPerson  = Omit<PersonInterface, 'state' | 'photo' | 'role'>;
export type ViewPerson     = Omit<PersonInterface, 'state'>;