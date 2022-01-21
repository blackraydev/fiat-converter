import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const Select = styled.select`
  transition: 0.2s;
  cursor: pointer;
  background: ${Colors.SECONDARY_LIGHT};
  color: ${Colors.WHITE};
  appearance: none;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 20px;

  &:hover {
    background: ${Colors.SECONDARY_LIGHT_HOVER};
  }
`;
