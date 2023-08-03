import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useContext,
  useState,
} from "react";
import { InitialIssue, Issue, IssueStatusDict } from "data";
import Button from "components/atoms/button";
import Label from "components/atoms/label";
import { ModalContext } from "components/organisms/TaskDisplay/TaskDisplay";
import * as S from "./style";

type IssueFormType = {
  issue: Issue;
  isEditing: boolean;
  onSwitchEdit: () => void;
  onAddIssue: (issue: Issue) => void;
  onEditIssue: (issue: Issue) => void;
};

const IssueForm = ({
  issue,
  isEditing,
  onSwitchEdit,
  onAddIssue,
  onEditIssue,
}: IssueFormType) => {
  const { setIsShow } = useContext(ModalContext);

  const [newIssue, setNewIssue] = useState<Issue>(InitialIssue);
  const [editIssue, setEditIssue] = useState<Issue>(issue);

  const handleChangeIssue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (isEditing) {
      setEditIssue({ ...editIssue, [e.target.name]: e.target.value });
    } else {
      setNewIssue({ ...newIssue, [e.target.name]: e.target.value });
    }
  };

  const handleSubmitIssue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      onEditIssue(editIssue);
    } else {
      onAddIssue(newIssue);
    }

    setIsShow(false);
    onSwitchEdit();
    setNewIssue(InitialIssue);
  };

  const handleCancelForm = () => {
    setIsShow(false);
    onSwitchEdit();
    setNewIssue(InitialIssue);
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
            value={isEditing ? editIssue.location : newIssue.location}
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
            value={isEditing ? editIssue.title : newIssue.title}
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
            value={isEditing ? editIssue.startDate : newIssue.startDate}
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
            value={isEditing ? editIssue.status : newIssue.status}
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
            {isEditing ? "Save" : "Submit"}
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
