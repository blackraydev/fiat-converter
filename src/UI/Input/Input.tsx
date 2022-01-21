import React, { useRef } from 'react';
import * as UI from './InputStyles';

interface IInputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}

export const Input: React.FC<IInputProps> = ({ value, placeholder, onChange, onFocus }) => {
  const inputRef = useRef();

  const keyPressHandler = (e: any) => {
    if (
      value &&
      value[0] === '0' &&
      (inputRef.current as any).selectionStart === 1 &&
      (e.key >= 0 || e.key <= 9)
    ) {
      return e.preventDefault();
    }

    if (
      value &&
      value[0] !== '.' &&
      value.includes('.') &&
      (inputRef.current as any).selectionStart === 0 &&
      e.key === '0'
    ) {
      return e.preventDefault();
    }

    if (e.key === '.' && value && !value.includes('.')) {
      return true;
    }

    if ((e.key >= 0 || e.key <= 9) && e.key !== ' ') {
      return true;
    }

    return e.preventDefault();
  };

  return (
    <UI.Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={keyPressHandler}
      onFocus={onFocus}
      ref={inputRef as any}
    />
  );
};
