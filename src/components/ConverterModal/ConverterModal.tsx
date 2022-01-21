import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CloseIcon, ConvertIcon } from '..';
import { Currencies } from '../../constants/currencies';
import { setPresition } from '../../helpers/setPrecision';
import { useActions } from '../../hooks/useActions';
import { usePrevious } from '../../hooks/usePrevious';
import {
  currenciesFromSelector,
  currenciesHasErrorSelector,
  currenciesIsLoadingSelector,
  currenciesToSelector,
} from '../../store';
import { Button, ComplexInput } from '../../UI';
import * as UI from './ConverterModalStyles';

interface IConverterModalProps {
  onClose: () => void;
}

export const ConverterModal: React.FC<IConverterModalProps> = ({ onClose }) => {
  const { getCurrencies } = useActions();

  const fromExchangeRateValue = useSelector(currenciesFromSelector);
  const toExchangeRateValue = useSelector(currenciesToSelector);
  const exchangeRateIsLoading = useSelector(currenciesIsLoadingSelector);
  const exchangeRateHasError = useSelector(currenciesHasErrorSelector);

  const [fromCurrency, setFromCurrency] = useState<Currencies>(Currencies.RUB);
  const [toCurrency, setToCurrency] = useState<Currencies>(Currencies.USD);
  const prevFromCurrency = usePrevious(fromCurrency);
  const prevToCurrency = usePrevious(toCurrency);

  const [fromUserValue, setFromUserValue] = useState('');
  const [toUserValue, setToUserValue] = useState('');

  const [fromInputFocused, setFromInputFocused] = useState(false);
  const [toInputFocused, setToInputFocused] = useState(false);

  useEffect(() => {
    let timeQuery = setTimeout(function timer() {
      getCurrencies(fromCurrency, toCurrency);
      timeQuery = setTimeout(timer, 15 * 1000);
    }, 0);

    return () => clearTimeout(timeQuery);
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setToCurrency(prevFromCurrency);
    }
  }, [prevFromCurrency]);

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setFromCurrency(prevToCurrency);
    }
  }, [prevToCurrency]);

  useEffect(() => {
    if (fromUserValue && fromInputFocused) {
      const newToUserValue = (Number(fromUserValue) * toExchangeRateValue).toString();
      setToUserValue(setPresition(newToUserValue));
    }
  }, [fromUserValue, toCurrency, toExchangeRateValue]);

  useEffect(() => {
    if (toUserValue && toInputFocused) {
      const newFromUserValue = (Number(toUserValue) * fromExchangeRateValue).toString();
      setFromUserValue(setPresition(newFromUserValue));
    }
  }, [toUserValue, fromCurrency, fromExchangeRateValue]);

  const swapCurrenciesHandler = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const changeFromCurrencyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: Currencies = e.target.value as Currencies;
    setFromCurrency(value);
  };

  const changeToCurrencyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: Currencies = e.target.value as Currencies;
    setToCurrency(value);
  };

  const changeFromUserValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromUserValue(e.target.value);
  };

  const changeToUserValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToUserValue(e.target.value);
  };

  const setFromInputFocusedHandler = () => {
    setToInputFocused(false);
    setFromInputFocused(true);
  };

  const setToInputFocusedHandler = () => {
    setFromInputFocused(false);
    setToInputFocused(true);
  };

  const submitConvertHandler = () => {
    alert('Submitted');
  };

  return (
    <UI.Overlay>
      <UI.ModalWrapper>
        <UI.Header>
          <UI.Title>Converter</UI.Title>
          <UI.CloseIconWrapper onClick={onClose}>
            <CloseIcon />
          </UI.CloseIconWrapper>
        </UI.Header>
        <UI.ConvertWrapper>
          <ComplexInput
            setInputFocused={setFromInputFocusedHandler}
            exchangeRateValue={toExchangeRateValue}
            fromCurrency={toCurrency}
            toCurrency={fromCurrency}
            onChangeSelect={changeToCurrencyHandler}
            value={fromUserValue}
            setValue={changeFromUserValueHandler}
          />
          <UI.ConvertIconWrapper onClick={swapCurrenciesHandler} exchangeRateHasError={exchangeRateHasError}>
            <ConvertIcon />
          </UI.ConvertIconWrapper>
          <ComplexInput
            setInputFocused={setToInputFocusedHandler}
            exchangeRateValue={fromExchangeRateValue}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            onChangeSelect={changeFromCurrencyHandler}
            value={toUserValue}
            setValue={changeToUserValueHandler}
          />
        </UI.ConvertWrapper>
        {exchangeRateHasError && <UI.ErrorMessage>An error occured while loading the data :(</UI.ErrorMessage>}
        <Button
          onClick={submitConvertHandler}
          value="Submit"
          disabled={exchangeRateIsLoading || exchangeRateHasError}
        />
      </UI.ModalWrapper>
    </UI.Overlay>
  );
};
