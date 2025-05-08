import { DomainEntity } from "src/shared/domain/entity/domain.entity";

class Paginated<T extends DomainEntity<T>> {
  constructor(
    public readonly items: T[],
    public readonly total: number,
    public readonly page: number,
    public readonly pageTotal: number,
    public readonly pageSize: number,
  ) {
    this.items = items.map((item) => item.toLiteral());
    this.total = total;
    this.page = page;
    this.pageTotal = pageTotal;
    this.pageSize = pageSize;
  }
}

export { Paginated };
