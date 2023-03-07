import { ChangeEventHandler, ReactNode, SelectHTMLAttributes } from "react";
import * as S from "./style";

type SelectProps = {
  children: ReactNode;
  onChange: ChangeEventHandler;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ children, onChange, ...rest }: SelectProps) => {
  return (
    <S.Select onChange={onChange} {...rest}>
      {children}
    </S.Select>
  );
};

export default Select;
