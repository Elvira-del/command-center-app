import styled from "styled-components";

export const FilterPanelWrapper = styled.div`
  display: flex;
`;

export const FilterForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 574px) {
    width: 100%;
  }
`;
