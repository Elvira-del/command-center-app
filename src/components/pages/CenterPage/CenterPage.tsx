import { Container } from "components/templates/style";
import MainPanel from "components/organisms/MainPanel";
import Header from "components/molecules/Header";
import * as S from "./style";

const CenterPage = () => {
  return (
    <>
      <Header />

      <S.Main>
        <S.Section>
          <Container>
            <MainPanel />
          </Container>
        </S.Section>
      </S.Main>
    </>
  );
};

export default CenterPage;
