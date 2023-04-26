import { DeleteEntity, GetEntity, UpdatedEntity } from '../interfaces/crud-methods.interface';

export interface PersonRepository<TEntityId, TEntityQuery, TEntity> extends 
    GetEntity     <TEntityId, TEntity>,
    UpdatedEntity <TEntityId, TEntityQuery, TEntity>,
    DeleteEntity  <TEntityId>
{}