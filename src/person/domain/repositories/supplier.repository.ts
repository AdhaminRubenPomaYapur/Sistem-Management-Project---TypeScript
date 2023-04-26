import { DeleteEntity, GetEntity, UpdatedEntity } from "../interfaces/crud-methods.interface";

export interface SupplierRepository<TEntityId, TEntityQuery, TEntity> extends
    GetEntity     <TEntityId, TEntity>,
    UpdatedEntity <TEntityId, TEntityQuery, TEntity>,
    DeleteEntity  <TEntityId>
{}