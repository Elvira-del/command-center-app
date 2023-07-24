import { useContext } from "react";
import TaskDisplay from "components/organisms/TaskDisplay";
import useFilterTasks from "hooks/useFilterTasks";
import { IssueContext } from "App";

const CenterPage = () => {
  const { issues } = useContext(IssueContext);
  const { filteredIssues, filterPanel } = useFilterTasks(issues);

  return (
    <>
      {filterPanel}
      <TaskDisplay tasks={filteredIssues} />
    </>
  );
};

export default CenterPage;
