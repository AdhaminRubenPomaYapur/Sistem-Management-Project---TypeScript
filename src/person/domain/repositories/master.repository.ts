import { CreateEntity } from "../interfaces/crud-methods.interface";

export interface MasterRepository<TEntityQuery, TEntity> extends
    CreateEntity  <TEntity, TEntityQuery>
{}