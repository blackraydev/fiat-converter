import React from 'react';
import * as UI from './ButtonStyles';

interface IButtonProps {
  value: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ value, onClick, disabled }) => {
  return (
    <UI.Button onClick={onClick} disabled={disabled}>
      {value}
    </UI.Button>
  );
};
