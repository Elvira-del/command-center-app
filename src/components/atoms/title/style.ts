import styled from "styled-components";

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};

  @media (${({ theme }) => theme.breakpoints.tablets}) {
    font-size: 24px;
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;
