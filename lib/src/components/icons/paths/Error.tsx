/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Error = ({ color }: PathProps) => (
  <>
    <path
      fill={color}
      d="M13 7a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V7ZM13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM3.395 12a8.605 8.605 0 1 1 17.21 0 8.605 8.605 0 0 1-17.21 0Z"
      clipRule="evenodd"
    />
  </>
);
