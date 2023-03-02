import React from "react";
import * as S from "./style";
import { Container } from "styles/components";
import ButtonUI from "components/UI/button/Button";
import FilterPanel from "components/FilterPanel/FilterPanel";

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

      <S.Main>
        <S.Section>
          <Container>
            <FilterPanel />
          </Container>
        </S.Section>
      </S.Main>
    </>
  );
};

export default CenterPage;
