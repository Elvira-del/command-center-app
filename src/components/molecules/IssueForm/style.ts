import styled from "styled-components";
import Input from "components/atoms/input";
import Select from "components/atoms/select";
import Title from "components/atoms/title";

export const IssueFormWrapper = styled.div`
  padding: ${({ theme }) => theme.gap.block}px;
  width: 50%;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.bgElem};

  @media (${({ theme }) => theme.breakpoints.tablets}) {
    width: 75%;
  }
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
  }
`;

export const IssueFormTitle = styled(Title)`
  margin-bottom: ${({ theme }) => theme.gap.elem}px;
`;

export const IssueForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.elem}px;
`;

export const IssueInput = styled(Input)`
  width: 70%;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 65%;
  }
`;

export const IssueSelect = styled(Select)`
  width: 70%;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 65%;
  }
`;

export const ButtonFormWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.gap.elem}px;
`;
