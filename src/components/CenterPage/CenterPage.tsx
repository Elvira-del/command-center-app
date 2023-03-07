import { useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import * as S from "./style";
import { Container } from "styles/components";
import ButtonUI from "components/UI/button/Button";
import FilterPanel from "components/FilterPanel/FilterPanel";
import TasksList from "components/TasksList/TasksList";
import IssueForm from "components/IssueForm/IssueForm";

export type Issue = {
  location: string;
  title: string;
  startDate: string;
  status: string;
};

const CenterPage = () => {
  const [issues, setIssues] = useLocalStorage<Issue[]>("localIssues", []);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddIssue = (issue: Issue) => {
    setIssues([...issues, issue]);
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
            <FilterPanel />

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
                <TasksList tasks={issues} />
              )}
            </S.TasksWrapper>
          </Container>
        </S.Section>
      </S.Main>
    </>
  );
};

export default CenterPage;
