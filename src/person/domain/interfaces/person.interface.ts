export interface PersonInterface {
    uid      : string;
    name     : string;
    lastname : string;
    age      : number;
    status   : boolean;
}

export type RegisterPerson = Omit<PersonInterface, 'status' | 'uid'>;
export type ViewPerson     = Omit<PersonInterface, 'status'>;