import { Issue } from "data";
import GroupPanel from "components/molecules/GroupPanel";
import TasksList from "components/molecules/TasksList";
import Title from "components/atoms/title";
import * as S from "./style";

type TaskDisplayProps = {
  onOpenForm: () => void;
  tasks: Issue[];
};

const TaskDisplay = ({ onOpenForm, tasks }: TaskDisplayProps) => {
  return (
    <S.TasksWrapper>
      <GroupPanel onOpenForm={onOpenForm} />
      {Boolean(tasks.length) ? (
        <TasksList tasks={tasks} />
      ) : (
        <Title tag={"h2"}>No issues found</Title>
      )}
    </S.TasksWrapper>
  );
};

export default TaskDisplay;
