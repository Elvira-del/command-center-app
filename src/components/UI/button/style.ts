import styled, { css } from "styled-components";

interface ButtonProps {
  styleBtn: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 10px;
  min-width: 100px;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme, styleBtn }) => {
    switch (styleBtn) {
      case "primary":
        return css`
          background-color: ${theme.colors.primary};
        `;
      case "secondary":
        return css`
          background-color: ${theme.colors.secondary};
        `;
      default:
        return css`
          background-color: #999999;
        `;
    }
  }};
  color: #f2f2f0;
  font-weight: 700;
`;
