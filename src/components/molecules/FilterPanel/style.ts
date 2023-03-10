import styled from "styled-components";

export const FilterPanelWrapper = styled.div`
  margin-bottom: 20px;
`;

export const FilterForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: start;
    gap: ${({ theme }) => theme.gap}px;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 510px) {
    width: 100%;
  }
`;

export const FilterDateLabel = styled(FilterLabel)`
  flex-direction: row;
  align-items: flex-end;
`;

export const FilterFieldset = styled.fieldset`
  display: flex;
  gap: ${({ theme }) => theme.gap}px;

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export const DateLegend = styled.legend`
  margin-bottom: 5px;
`;
