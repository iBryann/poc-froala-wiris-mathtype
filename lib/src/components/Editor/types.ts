import { InputHTMLAttributes } from 'react';

export type TEditor = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  licenseKey?: string;
  onChangeValue?: (value: string) => void;
};
