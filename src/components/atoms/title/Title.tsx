import { ElementType, ReactNode } from "react";
import * as S from "./style";

type TitleProps = {
  tag: ElementType;
  children: ReactNode;
};

const Title = ({ tag, children, ...rest }: TitleProps) => {
  return (
    <S.Title as={tag} {...rest}>
      {children}
    </S.Title>
  );
};

export default Title;
