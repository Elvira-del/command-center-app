import { Issue } from "data";
import * as S from "./style";

type TaskCardType = {
  task: Issue;
  onEditIssue: (issue: Issue) => void;
};

const TaskCard = ({ task, onEditIssue }: TaskCardType) => {
  return (
    <S.TaskCard onClick={() => onEditIssue(task)}>
      <S.TaskContent>{task.location}</S.TaskContent>
      <S.TaskContent>{task.title}</S.TaskContent>
      <S.TaskContent>{task.startDate}</S.TaskContent>
      <S.TaskContent>{task.status}</S.TaskContent>
    </S.TaskCard>
  );
};

export default TaskCard;
