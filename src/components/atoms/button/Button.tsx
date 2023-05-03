import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import * as S from "./style";

type ButtonType = {
  children: ReactNode;
  className: string;
  onClick?: MouseEventHandler;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, onClick, ...rest }: ButtonType) => {
  return (
    <S.Button $className={className} onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
