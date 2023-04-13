import { v4 as uuidv4 } from "uuid";
import { Issue, IssueListTitle } from "data";
import * as S from "./style";
import TaskCard from "../TaskCard";

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
          <TaskCard
            key={uuidv4()}
            location={task.location}
            title={task.title}
            date={task.startDate}
            status={task.status}
          />
        ))}
      </S.TasksList>
    </S.ListWrapper>
  );
};

export default TasksList;
