/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Validate = ({ color }: PathProps) => (
  <>
    <path
      fill={color}
      d="M16.762 10.249A.77.77 0 1 0 15.7 9.136l-5.113 4.877-2.286-2.184a.77.77 0 1 0-1.063 1.112l2.817 2.692a.77.77 0 0 0 1.063 0l5.644-5.384Z"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM3.538 12a8.462 8.462 0 1 1 16.924 0 8.462 8.462 0 0 1-16.924 0Z"
      clipRule="evenodd"
    />
  </>
);
