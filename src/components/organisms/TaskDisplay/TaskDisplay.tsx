import { Dispatch, SetStateAction, createContext, useState } from "react";
import { createPortal } from "react-dom";
import { Issue } from "data";
import GroupPanel from "components/molecules/GroupPanel";
import TasksList from "components/molecules/TasksList";
import IssueForm from "components/molecules/IssueForm";
import Title from "components/atoms/title";
import Modal from "components/atoms/modal";
import * as S from "./style";

type TaskDisplayType = {
  tasks: Issue[];
};

type ModalContextType = {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextType>({
  isShow: false,
  setIsShow: () => void {},
});

const TaskDisplay = ({ tasks }: TaskDisplayType) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <ModalContext.Provider value={{ isShow, setIsShow }}>
      <>
        <S.TasksWrapper>
          <GroupPanel />
          {tasks.length ? (
            <TasksList tasks={tasks} />
          ) : (
            <Title tag={"h2"}>No issues found</Title>
          )}
        </S.TasksWrapper>
      </>

      {isShow &&
        createPortal(
          <Modal>
            <IssueForm />
          </Modal>,
          document.body
        )}
    </ModalContext.Provider>
  );
};

export default TaskDisplay;
