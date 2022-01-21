import React from 'react';
import { Currencies } from '../../constants/currencies';
import * as UI from './SelectStyles';

interface ISelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<ISelectProps> = ({ onChange, value }) => {
  return (
    <UI.Select onChange={onChange} value={value}>
      <option value={Currencies.RUB}>{Currencies.RUB}</option>
      <option value={Currencies.USD}>{Currencies.USD}</option>
      <option value={Currencies.EUR}>{Currencies.EUR}</option>
    </UI.Select>
  );
};
