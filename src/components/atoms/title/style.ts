import styled from "styled-components";

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.lightFont};

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`;
