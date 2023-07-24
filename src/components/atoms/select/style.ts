import styled from "styled-components";

export const Select = styled.select`
  padding: 10px;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.bgFilter};
  font-family: ${({ theme }) => theme.fonts.fontFam};

  & {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    & {
      font-size: 12px;
    }
  }
`;
