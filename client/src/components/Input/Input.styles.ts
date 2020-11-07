import styled, { css } from 'styled-components';
import { InputStyleProps } from './types';

const inputSize: { [key: string]: string } = {
  small: '.5rem 1rem',
  default: '1.6rem 2.6rem',
  large: '1rem 1.4rem',
};

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const IconBox = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 20px;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const StyledInput = styled.input<InputStyleProps>`
  ${({ theme, rounded, Size, fullWidth }) => css`
    border: 1px solid ${theme.colors.borderColor};
    font-weight: ${theme.fontWeights[1]};
    color: ${theme.colors.primary.main};
    border-radius: ${rounded ? '5.4rem' : '.4rem'};
    padding: ${inputSize[Size as string]};
    width: ${fullWidth && '100%'};
    :focus {
      border-color: ${theme.colors.borderFocus};
    }
    ::placeholder {
      color: ${theme.colors.primary.main};
    }
  `};

  line-height: 1.5;
  outline: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
