import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { createSale, createSaleComplete, loadSales, loadSalesComplete } from '../actions/sale.actions';
import { Sale } from '../api-interfaces/sale';


export const saleFeatureKey = 'sale';

export interface SaleState extends EntityState<Sale> {
  lastId: number | null;
}

export const adapter: EntityAdapter<Sale> = createEntityAdapter<Sale>();

export const initialState: SaleState = adapter.getInitialState({
  lastId: null
});


const reducer = createReducer(
  initialState,
  on(loadSales, (state: SaleState) => { return { ...state }; }),
  on(loadSalesComplete, (state: SaleState, { sales }) => {
    const maxId = Math.max(...sales.map(s => s.id));
    return adapter.setAll(sales, { ...state, lastId: maxId });
  }),
  on(createSaleComplete, (state: SaleState, { sale }) => {
    return adapter.addOne(
      { ...sale, id: state.lastId + 1 }, 
      { ...state, lastId: state.lastId + 1 }
    );
  })
);

export function saleReducer(state: SaleState, action: Action) {
  return reducer(state, action);
}

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
 
// select the array of user ids
export const selectSaleIds = selectIds;
 
// select the dictionary of Sale entities
export const selectSaleEntities = selectEntities;
 
// select the array of Sales
export const selectAllSales = selectAll;
 
// select the total Sale count
export const selectSaleTotal = selectTotal;

