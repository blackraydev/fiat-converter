import { IReduxState } from '..';

export const currenciesFromSelector = (state: IReduxState) => state.currenciesReducer.from;
export const currenciesToSelector = (state: IReduxState) => state.currenciesReducer.to;
export const currenciesIsLoadingSelector = (state: IReduxState) => state.currenciesReducer.isLoading;
export const currenciesHasErrorSelector = (state: IReduxState) => state.currenciesReducer.hasError;
