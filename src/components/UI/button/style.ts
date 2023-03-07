import styled, { css } from "styled-components";

type ButtonProps = {
  className: string;
  radius?: string;
};

export const Button = styled.button<ButtonProps>`
  padding: 10px 15px;
  border-radius: ${({ theme, radius }) =>
    radius ? `${radius}%` : theme.borderRadius};
  ${({ theme, className }) => {
    switch (className) {
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
