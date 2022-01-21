import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const Button = styled.button`
  transition: 0.15s;
  cursor: pointer;
  height: 45px;
  background: ${Colors.BUTTON};
  border-radius: 20px;
  color: ${Colors.WHITE};
  font-size: 16px;
  padding: 0 35px;
  margin-top: 20px;
  margin-bottom: 10px;

  &:hover {
    background: ${Colors.BUTTON_HOVER};
  }

  &:disabled {
    cursor: unset;
    background: ${Colors.BUTTON_DISABLED};
  }
`;
