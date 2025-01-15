import { HTMLAttributes } from 'react';
import { ICON_NAMES } from '../icons';

export type FEEDBACK_TYPES = 'default' | 'info' | 'error' | 'success';

export const COLORS: Record<FEEDBACK_TYPES, string> = {
  default: '#CCC',
  info: '#005FFB',
  error: '#EA0F29',
  success: '#3DAF4A'
};

export const ICONS: Record<FEEDBACK_TYPES, ICON_NAMES> = {
  default: 'Add',
  info: 'Info',
  error: 'Error',
  success: 'Validate'
};

export interface IFeedback {
  feedbackShow?: boolean;
  feedbackType?: FEEDBACK_TYPES;
  feedbackMessage?: string;
}

export interface FeedbackProps extends IFeedback {
  disabled?: boolean;
}

export interface IContainer extends HTMLAttributes<HTMLDivElement> {}
