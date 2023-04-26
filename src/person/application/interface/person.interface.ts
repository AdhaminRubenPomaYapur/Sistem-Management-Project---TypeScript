import { DeleteEntity, GetEntity, UpdatedEntity } from "../../domain/interfaces/crud-methods.interface";

export interface InterfaceServicePerson<TEntityId, TEntityQuery, TEntity> extends 
    GetEntity     <TEntityId, TEntity>,
    UpdatedEntity <TEntityId, TEntityQuery, TEntity>,
    DeleteEntity  <TEntityId>
{}