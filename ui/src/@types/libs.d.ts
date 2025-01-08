declare module '@poliedro/lib-test-utils' {
  import React, { InputHTMLAttributes } from 'react';

  export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    value: string;
    onChangeValue?: (value: string) => void;
  };
  
  export const Editor: React.FC<InputProps>;
}