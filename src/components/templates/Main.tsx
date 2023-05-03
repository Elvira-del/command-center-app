import { ReactNode } from "react";
import * as S from "./style";

type MainType = {
  children: ReactNode;
};

const Main = ({ children }: MainType) => {
  return (
    <S.Main>
      <S.Section>
        <S.Container>{children}</S.Container>
      </S.Section>
    </S.Main>
  );
};

export default Main;
