import styled from 'styled-components';

export const Container = styled.label<{ $disabled?: boolean }>`
  display: block;
  margin-left: 1rem;
  padding-bottom: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    //styleName: Label/Medium;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;

    ${({ $disabled }) => ($disabled ? 'color: #c7c7c7;' : '')}

    svg {
      zoom: 50% !important;
      margin-top: -10px;
    }
  }
`;
