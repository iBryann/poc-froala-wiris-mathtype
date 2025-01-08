import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';

import { Index } from '.';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Index,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  errorBoundary(err, info, props) {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
