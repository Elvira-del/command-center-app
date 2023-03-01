import React from "react";
import * as S from "./style";
import { Container } from "styles/components";
import ButtonUI from "components/UI/button/Button";

const CenterPage = () => {
  return (
    <>
      <S.Header>
        <Container>
          <S.HeaderWrapper>
            <ButtonUI styleBtn="primary">CCA</ButtonUI>
            <h1>Command center application</h1>
          </S.HeaderWrapper>
        </Container>
      </S.Header>
    </>
  );
};

export default CenterPage;
