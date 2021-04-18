import { createAction, props } from '@ngrx/store';
import { Sale } from '../api-interfaces/sale';

export const loadSales = createAction(
  '[Sale] Load Sales'
);

export const loadSalesComplete = createAction(
  '[Sale] Load Complete',
  props<{ sales: Sale[] }>()
)

export const createSale = createAction(
  '[Sale] Create Sale',
  props<{ sale: Sale }>()
);

export const createSaleComplete = createAction(
  '[Sale] Create Sale Complete',
  props<{ sale: Sale }>()
);

export const createSaleFailed = createAction(
  '[Sale] Create Sale Failed',
  props<{ error: any }>()
);


