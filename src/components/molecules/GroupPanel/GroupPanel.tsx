import { useNavigate } from "react-router-dom";
import Button from "components/atoms/button";
import * as S from "./style";

const GroupPanel = () => {
  const navigate = useNavigate();

  const handleOpenForm = () => {
    navigate("issue-form", { replace: false });
  };

  return (
    <S.Panel>
      <S.GroupLabel htmlFor="groupTask">
        Group by location
        <S.GroupCheck type="checkbox" id="groupTask" />
      </S.GroupLabel>
      <Button type="button" className="primary" onClick={handleOpenForm}>
        Add issue
      </Button>
    </S.Panel>
  );
};

export default GroupPanel;
