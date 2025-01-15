/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Info = ({ color }: PathProps) => (
  <>
    <path
      fill={color}
      d="M10.461 11.23a.77.77 0 0 1 .77-.769H12a.77.77 0 0 1 .77.77v4.615a.77.77 0 1 1 0 1.539H12a.77.77 0 0 1-.77-.77V12a.77.77 0 0 1-.769-.77ZM12.961 7.77a1.154 1.154 0 1 1-2.307 0 1.154 1.154 0 0 1 2.307 0Z"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-8.462a8.462 8.462 0 1 0 0 16.924 8.462 8.462 0 0 0 0-16.924Z"
      clipRule="evenodd"
    />
  </>
);
