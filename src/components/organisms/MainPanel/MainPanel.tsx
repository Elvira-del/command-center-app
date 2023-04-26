import { useMemo, useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { Issue } from "data";
import FilterPanel from "components/molecules/FilterPanel";
import GroupPanel from "components/molecules/GroupPanel";
import IssueForm from "components/molecules/IssueForm";
import TasksList from "components/molecules/TasksList";
import Title from "components/atoms/title";
import * as S from "./style";

const MainPanel = () => {
  const [issues, setIssues] = useLocalStorage<Issue[]>("localIssues", []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredStatusIssues = useMemo(() => {
    if (selectedStatus) {
      return issues.filter((issue) => issue.status === selectedStatus);
    }
    return issues;
  }, [issues, selectedStatus]);

  const handleAddIssue = (issue: Issue) => {
    setIssues([...issues, issue]);
  };

  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status);
  };

  const handleOpenIssueForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <FilterPanel
        status={selectedStatus}
        onSelectStatus={handleStatusFilter}
      />

      <S.TasksWrapper>
        {isOpen ? (
          <IssueForm
            onAddIssue={handleAddIssue}
            onCloseForm={handleOpenIssueForm}
          />
        ) : (
          <>
            <GroupPanel onOpenForm={handleOpenIssueForm} />
            {Boolean(filteredStatusIssues.length) ? (
              <TasksList tasks={filteredStatusIssues} />
            ) : (
              <Title tag={"h2"}>No issues found</Title>
            )}
          </>
        )}
      </S.TasksWrapper>
    </>
  );
};

export default MainPanel;
