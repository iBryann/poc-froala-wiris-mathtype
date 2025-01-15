import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  --color: ${({ color }) => color};

  .fr-box {
    border: 1px solid var(--color);

    .fr-newline {
      display: none;
    }

    .fr-toolbar,
    .fr-wrapper,
    .fr-second-toolbar {
      border: none;
    }

    .fr-toolbar {
      border-bottom: 1px solid #dbdbdb;

      .fr-newline {
        display: none;
      }
    }

    .fr-second-toolbar {
      border-top: 1px solid #dbdbdb;
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;

    .fr-box {
      .fr-toolbar,
      .fr-wrapper,
      .fr-second-toolbar {
        background-color: #e6e6e6;
      }

      border: 1px solid ${theme.input.disabled.primary};

      * > ::after {
        border-top: 4px solid ${theme.input.disabled.primary} !important;
      }

      * {
        color: ${theme.input.disabled.primary} !important;
        border-color: ${theme.input.disabled.primary} !important;
        fill: ${theme.input.disabled.primary} !important;
      }
    }
  }
`;
