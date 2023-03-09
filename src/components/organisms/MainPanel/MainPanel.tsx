import GroupPanel from "components/molecules/GroupPanel/GroupPanel";
import TasksList from "components/molecules/TasksList/TasksList";
import { Issue } from "components/pages/CenterPage/CenterPage";

type TasksPanelProps = {
  tasks: Issue[];
  onOpenForm: () => void;
};

const MainPanel = ({ tasks, onOpenForm }: TasksPanelProps) => {
  return (
    <>
      <GroupPanel onOpenForm={onOpenForm} />
      <TasksList tasks={tasks} />
    </>
  );
};

export default MainPanel;
