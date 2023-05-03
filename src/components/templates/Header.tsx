import { useNavigate } from "react-router-dom";
import Button from "components/atoms/button";
import Title from "components/atoms/title";
import * as S from "./style";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/command-center-app", { replace: false });
  };

  return (
    <S.Header>
      <S.Container>
        <S.HeaderWrapper>
          <Button type="button" className="primary" onClick={handleNavigate}>
            CCA
          </Button>
          <Title tag={"h1"}>Command center application</Title>
        </S.HeaderWrapper>
      </S.Container>
    </S.Header>
  );
};

export default Header;
