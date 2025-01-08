import React from 'react';
import { TamentaiProvider } from '@poliedro/tamentai';

import { App } from './App';

export const Index = () => (
  <React.StrictMode>
    <TamentaiProvider>
      <App />
    </TamentaiProvider>
  </React.StrictMode>
);
