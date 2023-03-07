import { ChangeEvent } from "react";
import Input from "components/atoms/input/Input";
import Select from "components/atoms/select/Select";
import { IssueStatusDict } from "data";
import * as S from "./style";

type FilterPanelProps = {
  status: string;
  onSelectStatus: (status: string) => void;
};

const FilterPanel = ({ status, onSelectStatus }: FilterPanelProps) => {
  const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelectStatus(e.target.value);
  };

  return (
    <S.FilterPanelWrapper>
      <S.FilterForm>
        <S.FilterLabel htmlFor="typeFilter">
          Issue type
          <Input type="text" id="typeFilter" placeholder="Enter text..." />
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
          <Select
            id="statusFilter"
            value={status}
            onChange={handleChangeStatus}
          >
            <option value="">-- Select status --</option>
            {IssueStatusDict.map((status) => (
              <option key={status.id} value={status.value}>
                {status.value}
              </option>
            ))}
          </Select>
        </S.FilterLabel>
      </S.FilterForm>
    </S.FilterPanelWrapper>
  );
};

export default FilterPanel;
