import { HTMLAttributes } from 'react';

import { Add } from './paths/Add';
import { Error } from './paths/Error';
import { Info } from './paths/Info';
import { Required } from './paths/Required';
import { Validate } from './paths/Validate';

export enum SIZE_ENUM {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg'
}

export type SizeOptions = 'sm' | 'md' | 'lg';

export interface IconProps extends HTMLAttributes<SVGElement> {
  color?: string;
  size?: SizeOptions;
  name: ICON_NAMES;
}

export interface PathProps {
  color: string;
}

export const ICON_ZOOM = {
  [SIZE_ENUM.SMALL]: '80%',
  [SIZE_ENUM.MEDIUM]: '100%',
  [SIZE_ENUM.LARGE]: '120%'
};

export const ICONS = {
  Add,
  Error,
  Info,
  Required,
  Validate
};

export type ICON_NAMES = keyof typeof ICONS;
