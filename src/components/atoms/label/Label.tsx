import { LabelHTMLAttributes, ReactNode } from "react";
import * as S from "./style";

type LabelProps = {
  children: ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children }: LabelProps) => {
  return <S.Label>{children}</S.Label>;
};

export default Label;
