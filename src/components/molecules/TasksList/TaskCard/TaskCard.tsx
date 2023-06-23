import { Issue } from "data";
import * as S from "./style";

type TaskCardType = {
  task: Issue;
};

const TaskCard = ({ task }: TaskCardType) => {
  return (
    <S.TaskCard>
      <S.TaskContent>{task.location}</S.TaskContent>
      <S.TaskContent>{task.title}</S.TaskContent>
      <S.TaskContent>{task.startDate}</S.TaskContent>
      <S.TaskContent>{task.status}</S.TaskContent>
    </S.TaskCard>
  );
};

export default TaskCard;
