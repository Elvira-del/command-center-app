import styled, { css } from "styled-components";

type ButtonProps = {
  $className: string;
};

export const Button = styled.button<ButtonProps>`
  padding: 10px;
  min-width: 100px;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme, $className }) => {
    switch ($className) {
      case "primary":
        return css`
          background-color: ${theme.colors.primary};
        `;
      case "secondary":
        return css`
          background-color: ${theme.colors.secondary};
        `;
      case "success":
        return css`
          background-color: ${theme.colors.success};
        `;
      default:
        return css`
          background-color: ${theme.colors.primary};
        `;
    }
  }};
  font-family: ${({ theme }) => theme.fonts.fontFam};
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.lightFont};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;
