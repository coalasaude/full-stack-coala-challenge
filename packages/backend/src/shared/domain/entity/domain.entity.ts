abstract class DomainEntity<Entity> {
  abstract toLiteral(): Entity;
  abstract toPersistence<InfraEntity>(): InfraEntity;
}

export { DomainEntity };
