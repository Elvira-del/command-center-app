import { v4 as uuidv4 } from "uuid";
import { Issue, IssueListTitle } from "data";
import * as S from "./style";

type TasksListProps = {
  tasks: Issue[];
};

const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <S.ListWrapper>
      {IssueListTitle.map((title) => (
        <S.TasksTitle key={title.id}>{title.value}</S.TasksTitle>
      ))}

      <S.TasksList>
        {tasks.map((task) => (
          <S.TaskCard key={uuidv4()}>
            <S.TaskContent>{task.location}</S.TaskContent>
            <S.TaskContent>{task.title}</S.TaskContent>
            <S.TaskContent>{task.startDate}</S.TaskContent>
            <S.TaskContent>{task.status}</S.TaskContent>
          </S.TaskCard>
        ))}
      </S.TasksList>
    </S.ListWrapper>
  );
};

export default TasksList;
