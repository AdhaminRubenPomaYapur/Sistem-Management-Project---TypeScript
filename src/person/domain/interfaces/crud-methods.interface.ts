export interface CreateEntity <TEntity> {
    postEntity(tEntity: TEntity): Promise<TEntity | undefined>;
}

export interface GetEntity <TEntityId, TEntity> {
    getListEntity()                    : Promise<TEntity[] | undefined>;
    getEntityById(tEntityId: TEntityId): Promise<TEntity | undefined>
}

export interface UpdatedEntity<TEntityId, TEntity> {
    putEntity(tEntityId: TEntityId, tEntity: TEntity): Promise<TEntity | undefined>;
}

export interface DeleteEntity<TEntityId> {
    deleteEntity(tEntityId: TEntityId): Promise<string | undefined>;
}