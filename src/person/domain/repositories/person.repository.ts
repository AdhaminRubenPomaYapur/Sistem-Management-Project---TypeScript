import { 
    CreateEntity, 
    DeleteEntity, 
    GetEntity, 
    UpdatedEntity 
} from '../interfaces/crud-methods.interface';
import { ViewPerson, PersonInterface, RegisterPerson } from '../interfaces/person.interface';

export interface RepositoryPerson<TEntityId, TEntity> extends 
    GetEntity     <TEntityId, TEntity>,
    CreateEntity  <TEntity>,
    UpdatedEntity <TEntityId, TEntity>,
    DeleteEntity  <TEntityId>
{}