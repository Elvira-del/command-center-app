import ButtonUI from "components/atoms/button";
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
      <ButtonUI
        type="button"
        className="primary"
        radius="50"
        onClick={onOpenForm}
      >
        +
      </ButtonUI>
    </S.Panel>
  );
};

export default GroupPanel;
