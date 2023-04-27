import * as S from "./style";

type CardProps = {
  location: string;
  title: string;
  date: string;
  status: string;
};

const TaskCard = ({ location, title, date, status }: CardProps) => {
  return (
    <S.TaskCard>
      <S.TaskContent>{location}</S.TaskContent>
      <S.TaskContent>{title}</S.TaskContent>
      <S.TaskContent>{date}</S.TaskContent>
      <S.TaskContent>{status}</S.TaskContent>
    </S.TaskCard>
  );
};

export default TaskCard;
