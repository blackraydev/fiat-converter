import axios, { AxiosResponse } from 'axios';
import { API_KEY, API_URL, TO } from '../constants/api';
import { Currency } from '../types/Currency';

export class CurrencyServices {
  static async getExchangeRate(fromCurrency: Currency, toCurrency: Currency): Promise<AxiosResponse> {
    return await axios.get(API_URL + fromCurrency + TO + toCurrency + API_KEY);
  }
}
