import React from "react";
import * as S from "./style";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: string | React.ReactNode;
  styleBtn: string;
}

const Button = ({ children, styleBtn, ...other }: ButtonProps) => {
  return (
    <S.Button styleBtn={styleBtn} {...other}>
      {children}
    </S.Button>
  );
};

export default Button;
