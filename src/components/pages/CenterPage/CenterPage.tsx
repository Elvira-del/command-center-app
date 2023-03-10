import { useMemo, useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { Container } from "components/templates/style";
import ButtonUI from "components/atoms/button/Button";
import FilterPanel from "components/molecules/FilterPanel/FilterPanel";
import IssueForm from "components/molecules/IssueForm/IssueForm";
import MainPanel from "components/organisms/MainPanel/MainPanel";
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
              {isOpen ? (
                <IssueForm
                  onAddIssue={handleAddIssue}
                  onCloseForm={handleOpenIssueForm}
                />
              ) : (
                <>
                  <MainPanel
                    tasks={filteredStatusIssues}
                    onOpenForm={handleOpenIssueForm}
                  />
                </>
              )}
            </S.TasksWrapper>
          </Container>
        </S.Section>
      </S.Main>
    </>
  );
};

export default CenterPage;
