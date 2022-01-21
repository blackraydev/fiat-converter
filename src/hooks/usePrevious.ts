import { useEffect, useRef } from 'react';
import { Currencies } from '../constants/currencies';

export const usePrevious = (value: any): Currencies => {
  const currentRef = useRef<Currencies>(value);
  const previousRef = useRef<Currencies>();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current as Currencies;
};
