import { useNavigate } from "react-router-dom";
import { Container } from "components/templates/style";
import Button from "components/atoms/button";
import Title from "components/atoms/title";
import * as S from "./style";

type HeaderProps = {
  openForm: boolean;
  onCloseForm: () => void;
};

const Header = ({ openForm, onCloseForm }: HeaderProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (openForm) {
      onCloseForm();
    }
    navigate("/command-center-app", { replace: false });
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderWrapper>
          <Button type="button" className="primary" onClick={handleNavigate}>
            CCA
          </Button>
          <Title tag={"h1"}>Command center application</Title>
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
