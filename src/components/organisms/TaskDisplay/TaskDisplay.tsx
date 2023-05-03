import { Issue } from "data";
import GroupPanel from "components/molecules/GroupPanel";
import TasksList from "components/molecules/TasksList";
import Title from "components/atoms/title";
import * as S from "./style";

type TaskDisplayType = {
  tasks: Issue[];
};

const TaskDisplay = ({ tasks }: TaskDisplayType) => {
  return (
    <S.TasksWrapper>
      <GroupPanel />
      {Boolean(tasks.length) ? (
        <TasksList tasks={tasks} />
      ) : (
        <Title tag={"h2"}>No issues found</Title>
      )}
    </S.TasksWrapper>
  );
};

export default TaskDisplay;
