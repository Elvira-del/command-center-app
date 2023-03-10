import { ChangeEvent, FormEvent, useState } from "react";
import ButtonUI from "components/atoms/button";
import { Issue } from "data";
import * as S from "./style";

const InitialData = {
  location: "",
  title: "",
  startDate: "",
  status: "",
};

type IssueFormProps = {
  onAddIssue: (issue: Issue) => void;
  onCloseForm: () => void;
};

const IssueForm = ({ onAddIssue, onCloseForm }: IssueFormProps) => {
  const [issue, setIssue] = useState<Issue>(InitialData);

  const handleChangeIssue = (e: ChangeEvent<HTMLInputElement>) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const handleSubmitIssue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddIssue(issue);
    setIssue(InitialData);
    onCloseForm();
  };

  return (
    <>
      <S.IssueFormTitle>Issue report form</S.IssueFormTitle>

      <S.IssueForm onSubmit={handleSubmitIssue}>
        <S.IssueLabel htmlFor="location">
          Location:
          <S.IssueInput
            type="text"
            value={issue.location}
            onChange={handleChangeIssue}
            name="location"
            id="location"
            placeholder="Enter location"
            required
          />
        </S.IssueLabel>

        <S.IssueLabel htmlFor="reporter">
          Reporter:
          <S.IssueInput
            type="text"
            value={issue.title}
            onChange={handleChangeIssue}
            name="title"
            id="reporter"
            placeholder="Enter reporter"
            required
          />
        </S.IssueLabel>

        <S.IssueLabel htmlFor="date">
          Start date:
          <S.IssueInput
            type="date"
            value={issue.startDate}
            onChange={handleChangeIssue}
            name="startDate"
            id="date"
            required
          />
        </S.IssueLabel>

        <S.IssueLabel htmlFor="comment">
          Comment:
          <S.IssueInput
            type="text"
            value={issue.status}
            onChange={handleChangeIssue}
            name="status"
            id="comment"
            placeholder="Enter additional information"
            required
          />
        </S.IssueLabel>

        <S.ButtonFormWrapper>
          <ButtonUI type="submit" className="primary">
            Submit
          </ButtonUI>
          <ButtonUI type="button" onClick={onCloseForm} className="secondary">
            Cancel
          </ButtonUI>
        </S.ButtonFormWrapper>
      </S.IssueForm>
    </>
  );
};

export default IssueForm;
