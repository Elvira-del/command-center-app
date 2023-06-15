import { ChangeEvent } from "react";
import { FiltersListType, IssueStatusDict } from "data";
import Input from "components/atoms/input";
import Select from "components/atoms/select";
import Label from "components/atoms/label";
import * as S from "./style";

type FilterPanelType = {
  filters: FiltersListType;
  onFilter: (filters: FiltersListType) => void;
};

const FilterPanel = ({ filters, onFilter }: FilterPanelType) => {
  const handleChangeFilters = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    onFilter({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <S.FilterPanel>
      <S.FilterWrapper>
        <Label variant="filter" htmlFor="titleFilter">
          Issue title
          <Input
            type="text"
            id="titleFilter"
            name="titleFilter"
            value={filters.titleFilter}
            onChange={handleChangeFilters}
            placeholder="Enter text..."
          />
        </Label>

        <S.FilterFieldset>
          <S.DateLegend>Issue date</S.DateLegend>

          <Label variant="date" htmlFor="dateFrom">
            from
            <Input
              type="date"
              id="dateFrom"
              name="dateFrom"
              value={filters.dateFrom}
              onChange={handleChangeFilters}
            />
          </Label>

          <Label variant="date" htmlFor="dateTo">
            to
            <Input
              type="date"
              id="dateTo"
              name="dateTo"
              value={filters.dateTo}
              onChange={handleChangeFilters}
            />
          </Label>
        </S.FilterFieldset>

        <Label variant="filter" htmlFor="statusFilter">
          Status
          <Select
            id="statusFilter"
            name="statusFilter"
            value={filters.statusFilter}
            onChange={handleChangeFilters}
          >
            <option value="">-- Select status --</option>
            {IssueStatusDict.map((status) => (
              <option key={status.id} value={status.value}>
                {status.value}
              </option>
            ))}
          </Select>
        </Label>
      </S.FilterWrapper>
    </S.FilterPanel>
  );
};

export default FilterPanel;
