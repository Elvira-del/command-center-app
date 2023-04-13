import styled from "styled-components";

export const FilterPanelWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.gap.block}px;
  padding: 10px 0;
`;

export const FilterForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: start;
    gap: ${({ theme }) => theme.gap.elem}px;
  }
`;

export const FilterFieldset = styled.fieldset`
  display: flex;
  gap: ${({ theme }) => theme.gap.elem}px;
  font-weight: ${({ theme }) => theme.fonts.medium};

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export const DateLegend = styled.legend`
  margin-bottom: 5px;
`;
