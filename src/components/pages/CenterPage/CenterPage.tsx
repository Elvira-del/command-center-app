import { useMemo, useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { Container } from "components/templates/style";
import ButtonUI from "components/atoms/button/Button";
import FilterPanel from "components/molecules/FilterPanel/FilterPanel";
import IssueForm from "components/molecules/IssueForm/IssueForm";
import * as S from "./style";
import MainPanel from "components/organisms/MainPanel/MainPanel";

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
              {isOpen ? (
                <IssueForm
                  onAddIssue={handleAddIssue}
                  onCloseForm={() => setIsOpen(false)}
                />
              ) : (
                <>
                  <MainPanel
                    tasks={filteredStatusIssues}
                    onOpenForm={() => setIsOpen(true)}
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
