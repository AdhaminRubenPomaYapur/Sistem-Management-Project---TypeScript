import { RegisterSupplier } from "../../domain/interfaces/supplier.interface";
import { Supplier } from "../../domain/models/supplier.class";
import { SupplierRepository } from "../../domain/repositories/supplier.repository";
import { InterfaceServiceSupplier } from "../interface/supplier.interface";

export class ServiceSupplier implements InterfaceServiceSupplier<string, RegisterSupplier, Supplier> {
    constructor(private readonly supplierRepository: SupplierRepository<string, RegisterSupplier, Supplier>) {}

    async getListEntity(): Promise<Supplier[] | undefined> {
        const supplier = await this.supplierRepository.getListEntity();
        return supplier;
    }
    async getEntityById(tEntityId: string): Promise<Supplier | undefined> {
        const supplier = await this.supplierRepository.getEntityById(tEntityId);
        return supplier;
    }
    async putEntity(tEntityId: string, tEntityQuery: RegisterSupplier): Promise<Supplier | undefined> {
        const supplier = await this.supplierRepository.putEntity(tEntityId, tEntityQuery);
        return supplier;
    }
    async deleteEntity(tEntityId: string): Promise<string | undefined> {
        const supplier = await this.supplierRepository.deleteEntity(tEntityId);
        return supplier;
    }

}