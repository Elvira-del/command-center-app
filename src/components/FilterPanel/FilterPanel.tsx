import React from "react";
import Input from "components/UI/input/Input";
import Select from "components/UI/select/Select";
import * as S from "./style";

const FilterPanel = () => {
  return (
    <S.FilterPanelWrapper>
      <S.FilterForm>
        <S.FilterLabel htmlFor="typeFilter">
          Issue type
          <Input type="text" placeholder="Enter text..." id="typeFilter" />
        </S.FilterLabel>

        <S.FilterFieldset>
          <S.DateLegend>Issue date</S.DateLegend>

          <S.FilterDateLabel htmlFor="dateFrom">
            from
            <Input type="date" id="dateFrom" />
          </S.FilterDateLabel>

          <S.FilterDateLabel htmlFor="dateTo">
            to
            <Input type="date" id="dateTo" />
          </S.FilterDateLabel>
        </S.FilterFieldset>

        <S.FilterLabel htmlFor="statusFilter">
          Status
          <Select id="statusFilter">
            <option selected disabled>
              -- Select status --
            </option>
            <option value="actual">Actual</option>
            <option value="handled">Handled</option>
            <option value="archived">Archived</option>
          </Select>
        </S.FilterLabel>
      </S.FilterForm>
    </S.FilterPanelWrapper>
  );
};

export default FilterPanel;
