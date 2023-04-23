export interface PersonEntity {
    uid      : string;
    name     : string;
    lastname : string;
    age      : number;
    status   : boolean;
}

export type RegisterPerson = Omit<PersonEntity, 'status'>;
export type ViewPerson = Omit<PersonEntity, 'status'>;