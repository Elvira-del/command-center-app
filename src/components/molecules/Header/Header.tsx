import { Container } from "components/templates/style";
import Button from "components/atoms/button";
import Title from "components/atoms/title";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.HeaderWrapper>
          <Button type="button" className="primary">
            CCA
          </Button>
          <Title tag={"h1"}>Command center application</Title>
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
