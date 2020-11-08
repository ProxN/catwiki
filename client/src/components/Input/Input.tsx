import React from 'react';
import { StyledInput, InputContainer, IconBox } from './Input.styles';
import { InputStyleProps } from './types';

interface InputProps extends InputStyleProps {
  placeholder?: string;
  icon?: React.ReactNode;
  label?: string;
  type?: 'text' | 'password' | 'email';
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

const Input: React.FC<InputProps> = (props) => {
  const { icon, value } = props;
  return (
    <InputContainer>
      {icon && <IconBox>{icon}</IconBox>}
      <StyledInput value={value || ''} showIcon={!!icon} {...props} />
    </InputContainer>
  );
};

Input.defaultProps = {
  Size: 'default',
  type: 'text',
};

export default Input;
