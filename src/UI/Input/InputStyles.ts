import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const Input = styled.input`
  background: transparent;
  height: 35px;
  width: 85%;
  font-size: 24px;
  color: ${Colors.WHITE};
  letter-spacing: 1.5px;

  &::placeholder {
    color: ${Colors.INPUT_PLACEHOLDER};
  }
`;
