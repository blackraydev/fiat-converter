import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { currenciesReducer } from './Currencies';

const reducers = combineReducers({
  currenciesReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type IReduxState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
