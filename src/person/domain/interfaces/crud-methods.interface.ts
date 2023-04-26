export interface CreateEntity <TEntity, TEntityQuery> {
    postEntity(tEntityQuery: TEntityQuery): Promise<TEntity | undefined>;
}

export interface GetEntity <TEntityId, TEntity> {
    getListEntity()                    : Promise<TEntity[] | undefined>;
    getEntityById(tEntityId: TEntityId): Promise<TEntity | undefined>
}

export interface UpdatedEntity<TEntityId, TEntityQuery, TEntity> {
    putEntity(tEntityId: TEntityId, tEntityQuery: TEntityQuery): Promise<TEntity | undefined>;
}

export interface DeleteEntity<TEntityId> {
    deleteEntity(tEntityId: TEntityId): Promise<string | undefined>;
}