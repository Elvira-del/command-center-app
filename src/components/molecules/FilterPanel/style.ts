import styled from "styled-components";

export const FilterPanelWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const FilterForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`;

export const FilterLabel = styled.label``;

export const FilterDateLabel = styled(FilterLabel)`
  flex-direction: row;
  align-items: flex-end;
`;

export const FilterFieldset = styled.fieldset`
  display: flex;
  gap: ${({ theme }) => theme.gap}px;

  @media (max-width: 574px) {
    width: 100%;
  }

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const DateLegend = styled.legend`
  margin-bottom: 5px;
`;
