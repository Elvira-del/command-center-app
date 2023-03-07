import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import * as S from "./style";

type ButtonProps = {
  children: ReactNode;
  className: string;
  onClick?: MouseEventHandler;
  radius?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  onClick,
  radius,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button className={className} onClick={onClick} radius={radius} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
