import { useContext } from "react";
import Button from "components/atoms/button";
import { ModalContext } from "components/organisms/TaskDisplay/TaskDisplay";
import * as S from "./style";

const GroupPanel = () => {
  const { setIsShow } = useContext(ModalContext);

  return (
    <S.Panel>
      <S.GroupLabel htmlFor="groupTask">
        Group by location
        <S.GroupCheck type="checkbox" id="groupTask" />
      </S.GroupLabel>
      <Button type="button" className="primary" onClick={() => setIsShow(true)}>
        Add issue
      </Button>
    </S.Panel>
  );
};

export default GroupPanel;
