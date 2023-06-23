import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useContext,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { InitialIssue, Issue, IssueStatusDict } from "data";
import { IssueContext } from "App";
import { ModalContext } from "components/organisms/TaskDisplay/TaskDisplay";
import Button from "components/atoms/button";
import Label from "components/atoms/label";
import * as S from "./style";

const IssueForm = () => {
  const { issues, setIssues } = useContext(IssueContext);
  const { setIsShow } = useContext(ModalContext);

  const [issue, setIssue] = useState<Issue>(InitialIssue);

  const handleChangeIssue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setIssue({ ...issue, id: uuidv4(), [e.target.name]: e.target.value });
  };

  const handleSubmitIssue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIssues([...issues, issue]);
    setIsShow(false);
    setIssue(InitialIssue);
  };

  const handleCancelForm = () => {
    setIsShow(false);
    setIssue(InitialIssue);
  };

  const handleStopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <S.IssueFormWrapper onClick={handleStopPropagation}>
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
          <Button
            type="button"
            className="secondary"
            onClick={handleCancelForm}
          >
            Cancel
          </Button>
        </S.ButtonFormWrapper>
      </S.IssueForm>
    </S.IssueFormWrapper>
  );
};

export default IssueForm;
