import { useContext, useMemo, useState } from "react";
import { IssueContext } from "App";
import FilterPanel from "components/molecules/FilterPanel";
import TaskDisplay from "components/organisms/TaskDisplay";

const CenterPage = () => {
  const { issues } = useContext(IssueContext);
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredStatusIssues = useMemo(() => {
    if (selectedStatus) {
      return issues.filter((issue) => issue.status === selectedStatus);
    }
    return issues;
  }, [issues, selectedStatus]);

  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status);
  };

  return (
    <>
      <FilterPanel
        status={selectedStatus}
        onSelectStatus={handleStatusFilter}
      />

      <TaskDisplay tasks={filteredStatusIssues} />
    </>
  );
};

export default CenterPage;
