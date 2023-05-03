import { ElementType, ReactNode } from "react";
import * as S from "./style";

type TitleType = {
  tag: ElementType;
  children: ReactNode;
};

const Title = ({ tag, children, ...rest }: TitleType) => {
  return (
    <S.Title as={tag} {...rest}>
      {children}
    </S.Title>
  );
};

export default Title;
