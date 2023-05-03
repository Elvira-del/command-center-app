import styled from "styled-components";

export const FilterPanel = styled.div`
  margin-bottom: ${({ theme }) => theme.gap.block}px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.elem}px;

  @media (${({ theme }) => theme.breakpoints.tablets}) {
    flex-direction: column;
  }
`;

export const FilterFieldset = styled.fieldset`
  display: flex;
  gap: ${({ theme }) => theme.gap.elem}px;
  font-weight: ${({ theme }) => theme.fonts.medium};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const DateLegend = styled.legend`
  margin-bottom: 5px;
`;
