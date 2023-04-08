import * as S from "components/templates/style";
import MainPanel from "components/organisms/MainPanel";
import Header from "components/molecules/Header";

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
