import styled, { css } from "styled-components";

type LabelProps = {
  $variant: string;
};

export const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: row;
  ${({ $variant }) => {
    switch ($variant) {
      case "filter": {
        return css`
          flex-direction: column;
        `;
      }
      case "form": {
        return css`
          justify-content: space-between;
          align-items: center;
          gap: 2em;
          white-space: pre;
        `;
      }
      case "date": {
        return css`
          align-items: flex-end;
        `;
      }
      default: {
        return css``;
      }
    }
  }};
  gap: 5px;
  font-weight: ${({ theme }) => theme.fonts.medium};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
