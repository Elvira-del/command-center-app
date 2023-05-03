import { LabelHTMLAttributes, ReactNode } from "react";
import * as S from "./style";

type LabelType = {
  children: ReactNode;
  variant: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, variant, ...rest }: LabelType) => {
  return (
    <S.Label $variant={variant} {...rest}>
      {children}
    </S.Label>
  );
};

export default Label;
