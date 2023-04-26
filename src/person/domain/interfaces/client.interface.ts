export interface ClientInterface {
    uid        : string;
    email      : string;
    password   : string;
    access     : Date;
    google     : boolean;
    state      : boolean;
}

export type RegisterClient = Omit<ClientInterface, 'state' | 'access' | 'google'>
export type ViewClient     = Omit<ClientInterface, 'state'>