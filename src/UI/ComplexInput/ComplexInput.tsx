import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input, Select } from '..';
import { currenciesIsLoadingSelector } from '../../store';
import * as UI from './ComplexInputStyles';

interface IComplexInputProps {
  setInputFocused: () => void;
  exchangeRateValue: number;
  fromCurrency: string;
  toCurrency: string;
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ComplexInput: React.FC<IComplexInputProps> = ({
  setInputFocused,
  exchangeRateValue,
  fromCurrency,
  toCurrency,
  onChangeSelect,
  value,
  setValue,
}) => {
  const isLoading = useSelector(currenciesIsLoadingSelector);

  return (
    <UI.ComplexInputWrapper>
      <UI.MainContent>
        <Input placeholder="0.0" value={value} onChange={setValue} onFocus={setInputFocused} />
        <Select value={fromCurrency} onChange={onChangeSelect} />
      </UI.MainContent>
      <UI.ExchangeRate>
        {isLoading ? 'Updating...' : `1 ${fromCurrency} = ${exchangeRateValue.toFixed(4)} ${toCurrency}`}
      </UI.ExchangeRate>
    </UI.ComplexInputWrapper>
  );
};
