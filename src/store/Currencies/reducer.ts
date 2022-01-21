import { ACTIONS } from './constants';
import { GAction } from '../../types/GAction';

interface ICurrenciesState {
  from: number;
  to: number;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: ICurrenciesState = {
  from: 0,
  to: 0,
  isLoading: false,
  hasError: false,
};

type Action =
  | GAction<ACTIONS.CURRENCIES_REQUEST_END | ACTIONS.CURRENCIES_REJECT_DATA | ACTIONS.CURRENCIES_REQUEST_DATA>
  | GAction<ACTIONS.CURRENCIES_RECEIVE_DATA, { from: number; to: number }>;

export const currenciesReducer = (state = initialState, action: Action): ICurrenciesState => {
  switch (action.type) {
    case ACTIONS.CURRENCIES_REQUEST_DATA:
      return { ...state, isLoading: true };
    case ACTIONS.CURRENCIES_RECEIVE_DATA:
      return { ...state, from: action.payload.from, to: action.payload.to };
    case ACTIONS.CURRENCIES_REJECT_DATA:
      return { ...state, isLoading: false, hasError: true };
    case ACTIONS.CURRENCIES_REQUEST_END:
      return { ...state, isLoading: false, hasError: false };
    default:
      return state;
  }
};
