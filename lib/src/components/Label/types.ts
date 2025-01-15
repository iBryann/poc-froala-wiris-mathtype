import { HTMLAttributes } from 'react';

export interface ILabel extends HTMLAttributes<HTMLElement> {
  label?: string;
  fieldId?: string;
  required?: boolean;
  disabled?: boolean;
}
