import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import useLocalStorage from "hooks/useLocalStorage";
import { Issue } from "data";
import Header from "components/molecules/Header";
import FilterPanel from "components/molecules/FilterPanel";
import TaskDisplay from "components/organisms/TaskDisplay";
import IssueForm from "components/molecules/IssueForm";
import * as S from "components/templates/style";

const CenterPage = () => {
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
      <Header openForm={isOpen} onCloseForm={handleOpenIssueForm} />

      <S.Main>
        <S.Section>
          <S.Container>
            <FilterPanel
              status={selectedStatus}
              onSelectStatus={handleStatusFilter}
            />

            <Routes>
              {isOpen ? (
                <Route
                  path="issue-form"
                  element={
                    <IssueForm
                      onAddIssue={handleAddIssue}
                      onCloseForm={handleOpenIssueForm}
                    />
                  }
                />
              ) : (
                <Route
                  index
                  element={
                    <TaskDisplay
                      onOpenForm={handleOpenIssueForm}
                      tasks={filteredStatusIssues}
                    />
                  }
                />
              )}
            </Routes>
          </S.Container>
        </S.Section>
      </S.Main>
    </>
  );
};

export default CenterPage;
