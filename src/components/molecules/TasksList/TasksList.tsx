import { v4 as uuidv4 } from "uuid";
import { Issue, IssueListTitle } from "data";
import TaskCard from "./TaskCard";
import * as S from "./style";

type TasksListType = {
  tasks: Issue[];
};

const TasksList = ({ tasks }: TasksListType) => {
  return (
    <S.ListWrapper>
      {IssueListTitle.map((title) => (
        <S.TasksTitle key={title.id}>{title.value}</S.TasksTitle>
      ))}

      <S.TasksList>
        {tasks.map((task) => (
          <TaskCard key={uuidv4()} task={task} />
        ))}
      </S.TasksList>
    </S.ListWrapper>
  );
};

export default TasksList;
