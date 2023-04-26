import { CreateEntity } from "../../domain/interfaces/crud-methods.interface";

export interface InterfaceServiceMaster<TEntityQuery, TEntity> extends
    CreateEntity  <TEntity, TEntityQuery>
{}