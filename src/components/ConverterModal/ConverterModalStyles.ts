import styled, { css } from 'styled-components';
import { Colors } from '../../constants/colors';

interface IConvertIconWrapperStyleProps {
  exchangeRateHasError: boolean;
}

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  left: 0;
  top: 0;
  background: ${Colors.OVERLAY};
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 10px;
  border-radius: 25px;
  background: ${Colors.SECONDARY};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
`;

export const Title = styled.div`
  font-size: 20px;
  color: ${Colors.WHITE};
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: 0.2s;
  }
`;

export const CloseIconWrapper = styled(IconWrapper)`
  svg {
    width: 25px;
    height: 25px;
    fill: white;
  }

  &:hover {
    svg {
      fill: ${Colors.GRAY};
    }
  }
`;

export const ConvertIconWrapper = styled(IconWrapper)<IConvertIconWrapperStyleProps>`
  position: absolute;
  left: calc(50% - 30px);
  background: ${Colors.INPUT};
  border: 5px solid ${Colors.SECONDARY};
  border-radius: 15px;
  padding: 5px;

  ${({ exchangeRateHasError }: IConvertIconWrapperStyleProps) =>
    (exchangeRateHasError &&
      css`
        top: calc(50% - 45px);
      `) ||
    (!exchangeRateHasError &&
      css`
        top: calc(50% - 30px);
      `)}

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    svg {
      stroke: ${Colors.GRAY};
    }
  }
`;

export const ConvertWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${Colors.ERROR};
  margin-top: 5px;
`;
