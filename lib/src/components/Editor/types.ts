import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChangeValue?: (value: string) => void;
};
