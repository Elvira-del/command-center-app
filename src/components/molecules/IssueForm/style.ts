import styled from "styled-components";
import Input from "components/atoms/input/Input";
import Select from "components/atoms/select/Select";

export const IssueFormTitle = styled.h3`
  margin-bottom: 15px;
`;

export const IssueForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.elem}px;
`;

export const IssueLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  white-space: pre;
`;

export const IssueInput = styled(Input)`
  width: 70%;
`;

export const IssueSelect = styled(Select)`
  width: 70%;
`;

export const ButtonFormWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.gap.elem}px;
`;
