import { LabelHTMLAttributes, ReactNode } from "react";
import * as S from "./style";

type LabelProps = {
  children: ReactNode;
  variant: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, variant, ...rest }: LabelProps) => {
  return (
    <S.Label $variant={variant} {...rest}>
      {children}
    </S.Label>
  );
};

export default Label;
