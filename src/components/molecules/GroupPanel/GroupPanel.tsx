import Button from "components/atoms/button";
import * as S from "./style";

type GroupPanelProps = {
  onOpenForm: () => void;
};

const GroupPanel = ({ onOpenForm }: GroupPanelProps) => {
  return (
    <S.Panel>
      <S.GroupLabel htmlFor="groupTask">
        Group by location
        <S.GroupCheck type="checkbox" id="groupTask" />
      </S.GroupLabel>
      <Button type="button" className="primary" onClick={onOpenForm}>
        Add issue
      </Button>
    </S.Panel>
  );
};

export default GroupPanel;
