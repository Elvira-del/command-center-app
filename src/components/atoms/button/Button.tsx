import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import * as S from "./style";

type ButtonProps = {
  children: ReactNode;
  className: string;
  onClick?: MouseEventHandler;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, onClick, ...rest }: ButtonProps) => {
  return (
    <S.Button $className={className} onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
