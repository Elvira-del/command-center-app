import { ChangeEvent, FormEvent, useState } from "react";
import { Issue, IssueStatusDict } from "data";
import Button from "components/atoms/button";
import Label from "components/atoms/label";
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

  const handleChangeIssue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const handleSubmitIssue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddIssue(issue);
    setIssue(InitialData);
    onCloseForm();
  };

  return (
    <S.IssueFormWrapper>
      <S.IssueFormTitle tag={"h3"}>Issue report form</S.IssueFormTitle>

      <S.IssueForm onSubmit={handleSubmitIssue}>
        <Label variant="form" htmlFor="location">
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
        </Label>

        <Label variant="form" htmlFor="title">
          Title:
          <S.IssueInput
            type="text"
            value={issue.title}
            onChange={handleChangeIssue}
            name="title"
            id="title"
            placeholder="Enter title"
            required
          />
        </Label>

        <Label variant="form" htmlFor="date">
          Start date:
          <S.IssueInput
            type="date"
            value={issue.startDate}
            onChange={handleChangeIssue}
            name="startDate"
            id="date"
            required
          />
        </Label>

        <Label variant="form" htmlFor="status">
          Status:
          <S.IssueSelect
            id="status"
            name="status"
            value={issue.status}
            onChange={handleChangeIssue}
            required
          >
            <option value="">Select status</option>
            {IssueStatusDict.map((status) => (
              <option key={status.id} value={status.value}>
                {status.value}
              </option>
            ))}
          </S.IssueSelect>
        </Label>

        <S.ButtonFormWrapper>
          <Button type="submit" className="success">
            Submit
          </Button>
          <Button type="button" onClick={onCloseForm} className="secondary">
            Cancel
          </Button>
        </S.ButtonFormWrapper>
      </S.IssueForm>
    </S.IssueFormWrapper>
  );
};

export default IssueForm;
