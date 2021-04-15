export enum SaleStatus {
  WAITING,
  DENIED,
  APPROVED
}

export interface Sale {
  id: number;
  price: number;
  date: Date;
  cashback: number;
  status: SaleStatus
}
