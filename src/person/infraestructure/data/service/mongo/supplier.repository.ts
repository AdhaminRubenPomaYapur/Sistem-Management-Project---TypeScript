import { Model } from "mongoose";
import { RegisterSupplier, SupplierInterface } from "../../../../domain/interfaces/supplier.interface";
import { Supplier } from "../../../../domain/models/supplier.class";
import { SupplierRepository } from "../../../../domain/repositories/supplier.repository";
import SupplierModel from "../../models/mongo/supplier";

export class RepositorySupplier implements SupplierRepository<string, RegisterSupplier, Supplier> {
    constructor( private readonly modelSupplier: Model<SupplierInterface>) {
        this.modelSupplier = SupplierModel;
    }
    async getListEntity(): Promise<Supplier[] | undefined> {
        const suppliers = await this.modelSupplier.find();
        return suppliers;
    }
    async getEntityById(tEntityId: string): Promise<Supplier | undefined> {
        const supplier = await this.modelSupplier.findOne({uid: tEntityId});
        if( !supplier ) return undefined;
        return supplier;
    }
    async putEntity(tEntityId: string, tEntityQuery: RegisterSupplier): Promise<Supplier | undefined> {
        const supplier = await this.modelSupplier.findOneAndUpdate({uid: tEntityId}, tEntityQuery, { new: true} );
        if( !supplier ) return undefined;
        return supplier;
    }
    async deleteEntity(tEntityId: string): Promise<string | undefined> {
        await this.modelSupplier.findOneAndUpdate({uid: tEntityId}, {state: false}, {new: true} );
        return `The supplier is drop succesfull`
    }

    
}