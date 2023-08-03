import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { InitialIssue, Issue } from "data";
import { IssueContext } from "App";
import { issuesReducer } from "utils/issuesReducer";
import Title from "components/atoms/title";
import Modal from "components/atoms/modal";
import GroupPanel from "components/molecules/GroupPanel";
import TasksList from "components/molecules/TasksList";
import IssueForm from "components/molecules/IssueForm";
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
  const { issues, setIssues } = useContext(IssueContext);
  const [currentIssues, dispatch] = useReducer(issuesReducer, issues);

  const [issue, setIssue] = useState(InitialIssue);
  const [isEditing, setIsEditing] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIssues(currentIssues);
  }, [currentIssues]);

  const handleAddIssue = (issue: Issue) => {
    dispatch({
      type: "add_incident",
      payload: issue,
    });
  };

  const handleEditIssue = (issue: Issue) => {
    dispatch({
      type: "edit_incident",
      payload: issue,
    });

    setIssue(issue);
    setIsEditing(true);
    setIsShow(true);
  };

  const handleSwitchEditingIssue = () => {
    setIsEditing(false);
  };

  return (
    <ModalContext.Provider value={{ isShow, setIsShow }}>
      <>
        <S.TasksWrapper>
          <GroupPanel />
          {tasks.length ? (
            <TasksList tasks={tasks} onEditIssue={handleEditIssue} />
          ) : (
            <Title tag={"h2"}>No issues found</Title>
          )}
        </S.TasksWrapper>
      </>

      {isShow &&
        createPortal(
          <Modal onSwitchEdit={handleSwitchEditingIssue}>
            <IssueForm
              issue={issue}
              isEditing={isEditing}
              onSwitchEdit={handleSwitchEditingIssue}
              onAddIssue={handleAddIssue}
              onEditIssue={handleEditIssue}
            />
          </Modal>,
          document.body
        )}
    </ModalContext.Provider>
  );
};

export default TaskDisplay;
