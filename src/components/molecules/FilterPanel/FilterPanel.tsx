import { ChangeEvent } from "react";
import { IssueStatusDict } from "data";
import Input from "components/atoms/input";
import Select from "components/atoms/select";
import Label from "components/atoms/label";
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
    <S.FilterPanel>
      <S.FilterWrapper>
        <Label variant="filter" htmlFor="titleFilter">
          Issue title
          <Input type="text" id="titleFilter" placeholder="Enter text..." />
        </Label>

        <S.FilterFieldset>
          <S.DateLegend>Issue date</S.DateLegend>

          <Label variant="date" htmlFor="dateFrom">
            from
            <Input type="date" id="dateFrom" />
          </Label>

          <Label variant="date" htmlFor="dateTo">
            to
            <Input type="date" id="dateTo" />
          </Label>
        </S.FilterFieldset>

        <Label variant="filter" htmlFor="statusFilter">
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
        </Label>
      </S.FilterWrapper>
    </S.FilterPanel>
  );
};

export default FilterPanel;
