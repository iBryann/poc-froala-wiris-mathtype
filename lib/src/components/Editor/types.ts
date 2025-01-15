import { InputHTMLAttributes } from 'react';
import { IFeedback } from '../Feedback/types';

export type TEditor = InputHTMLAttributes<HTMLInputElement> &
  IFeedback & {
    value: string;
    label?: string;
    disabled?: boolean;
    licenseKey?: string;
    onChangeValue?: (value: string) => void;
  };
