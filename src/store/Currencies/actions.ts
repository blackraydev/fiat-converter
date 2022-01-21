import { Dispatch } from 'redux';
import { Currencies } from '../../constants/currencies';
import { ICurrencies } from '../../models/ICurrencies';
import { CurrencyServices } from '../../services/currencyServices';
import { Currency } from '../../types/Currency';
import { ACTIONS } from './constants';

const getCurrencies =
  (fromCurrency: Currency, toCurrency: Currency) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const firstResponse = await CurrencyServices.getExchangeRate(fromCurrency, toCurrency);
      const secondResponse = await CurrencyServices.getExchangeRate(toCurrency, fromCurrency);

      const from = firstResponse.data.result[toCurrency];
      const to = secondResponse.data.result[fromCurrency];

      dispatch(receiveData({ from, to }));
      dispatch(requestEnd());
    } catch (e) {
      console.log(e);
      dispatch(rejectData());
    }
  };

const requestData = () => ({
  type: ACTIONS.CURRENCIES_REQUEST_DATA,
});

const receiveData = (payload: ICurrencies) => ({
  type: ACTIONS.CURRENCIES_RECEIVE_DATA,
  payload: payload,
});

const rejectData = () => ({
  type: ACTIONS.CURRENCIES_REJECT_DATA,
});

const requestEnd = () => ({
  type: ACTIONS.CURRENCIES_REQUEST_END,
});

export const currenciesActions = {
  getCurrencies,
};
