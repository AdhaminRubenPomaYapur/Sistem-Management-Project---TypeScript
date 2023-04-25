import { 
    CreateEntity,
    DeleteEntity,
    GetEntity,
    UpdatedEntity
} from "../../domain/interfaces/crud-methods.interface";

export interface InterfaceServicePerson<TEntityId, TEntity> extends 
    GetEntity     <TEntityId, TEntity>,
    CreateEntity  <TEntity>,
    UpdatedEntity <TEntityId,TEntity>,
    DeleteEntity  <TEntityId>
{}