import { Container } from "components/templates/style";
import ButtonUI from "components/atoms/button";
import Title from "components/atoms/title";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.HeaderWrapper>
          <ButtonUI type="button" className="primary">
            CCA
          </ButtonUI>
          <Title tag={"h1"}>Command center application</Title>
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
