import { Issue } from "components/pages/MainPanel/MainPanel";
import * as S from "./style";

interface TasksListProps {
  tasks: Issue[];
}

const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <S.TasksList>
      {tasks.map((task, idx) => (
        <S.TaskCard key={idx}>
          <S.TaskContent>{task.location}</S.TaskContent>
          <S.TaskContent>{task.title}</S.TaskContent>
          <S.TaskContent>{task.startDate}</S.TaskContent>
          <S.TaskContent>{task.status}</S.TaskContent>
        </S.TaskCard>
      ))}
    </S.TasksList>
  );
};

export default TasksList;
