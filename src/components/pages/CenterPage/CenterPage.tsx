import MainPanel from "components/organisms/MainPanel";
import Header from "components/molecules/Header";
import * as S from "components/templates/style";

const CenterPage = () => {
  return (
    <>
      <Header />

      <S.Main>
        <S.Section>
          <S.Container>
            <MainPanel />
          </S.Container>
        </S.Section>
      </S.Main>
    </>
  );
};

export default CenterPage;
