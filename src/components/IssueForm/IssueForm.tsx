import React from "react";
import * as S from "./style";
import ButtonUI from "components/UI/button/Button";

const IssueForm = () => {
  return (
    <>
      <S.IssueFormTitle>Issue report form</S.IssueFormTitle>

      <S.IssueForm>
        <S.IssueLabel htmlFor="location">
          Location:
          <S.IssueInput
            type="text"
            id="location"
            placeholder="Enter location"
          />
        </S.IssueLabel>

        <S.IssueLabel htmlFor="reporter">
          Reporter:
          <S.IssueInput
            type="text"
            id="reporter"
            placeholder="Enter reporter"
          />
        </S.IssueLabel>

        <S.IssueLabel htmlFor="date">
          Start date:
          <S.IssueInput type="date" id="date" />
        </S.IssueLabel>

        <S.IssueLabel htmlFor="comment">
          Comment:
          <S.IssueInput
            type="text"
            id="comment"
            placeholder="Enter additional information"
          />
        </S.IssueLabel>

        <S.ButtonFormWrapper>
          <ButtonUI type="submit" styleBtn="primary">
            Submit
          </ButtonUI>
          <ButtonUI type="button" styleBtn="secondary">
            Cancel
          </ButtonUI>
        </S.ButtonFormWrapper>
      </S.IssueForm>
    </>
  );
};

export default IssueForm;
