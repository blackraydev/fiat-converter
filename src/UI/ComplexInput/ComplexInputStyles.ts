import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const ComplexInputWrapper = styled.div`
  transition: 0.2s;
  border-radius: 20px;
  background: ${Colors.INPUT};
  border: 1px solid ${Colors.INPUT};
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;

  &:hover {
    border: 1px solid ${Colors.GRAY};
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ExchangeRate = styled.p`
  font-size: 14px;
  color: ${Colors.GRAY_BLUE};
  margin-top: 5px;
  padding-left: 2px;
`;
