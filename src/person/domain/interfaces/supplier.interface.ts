export interface SupplierInterface {
    uid     : string;
    company : string;
    address : string;
    geo     : string;
    state   : boolean;
}

export type RegisterSupplier = Omit<SupplierInterface, 'state' | 'geo'>;
export type ViewSupplier     = Omit<SupplierInterface, 'state' | 'geo'>;