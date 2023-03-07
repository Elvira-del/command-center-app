import { useMemo, useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { Container } from "styles/components";
import ButtonUI from "components/atoms/button/Button";
import FilterPanel from "components/molecules/FilterPanel/FilterPanel";
import TasksList from "components/molecules/TasksList/TasksList";
import IssueForm from "components/molecules/IssueForm/IssueForm";
import * as S from "./style";

export type Issue = {
  location: string;
  title: string;
  startDate: string;
  status: string;
};

const CenterPage = () => {
  const [issues, setIssues] = useLocalStorage<Issue[]>("localIssues", []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleAddIssue = (issue: Issue) => {
    setIssues([...issues, issue]);
  };

  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status);
  };

  const filteredStatusIssues = useMemo(() => {
    if (selectedStatus) {
      return issues.filter((issue) => issue.status === selectedStatus);
    }
    return issues;
  }, [issues, selectedStatus]);

  return (
    <>
      <S.Header>
        <Container>
          <S.HeaderWrapper>
            <ButtonUI type="button" className="primary">
              CCA
            </ButtonUI>
            <h1>Command center application</h1>
          </S.HeaderWrapper>
        </Container>
      </S.Header>

      <S.Main>
        <S.Section>
          <Container>
            <FilterPanel
              status={selectedStatus}
              onSelectStatus={handleStatusFilter}
            />

            <S.TasksWrapper>
              <div>
                <label htmlFor="groupTask">
                  Group by location
                  <input type="checkbox" id="groupTask" />
                </label>
                <ButtonUI
                  type="button"
                  className="primary"
                  radius="50"
                  onClick={() => setIsOpen(true)}
                >
                  +
                </ButtonUI>
              </div>

              {isOpen ? (
                <IssueForm
                  onAddIssue={handleAddIssue}
                  onCloseForm={() => setIsOpen(false)}
                />
              ) : (
                <TasksList tasks={filteredStatusIssues} />
              )}
            </S.TasksWrapper>
          </Container>
        </S.Section>
      </S.Main>
    </>
  );
};

export default CenterPage;
