import * as S from "./style";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <S.Title>{text}</S.Title>;
};

export default Title;
