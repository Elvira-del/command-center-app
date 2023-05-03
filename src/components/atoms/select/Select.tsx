import { ChangeEventHandler, ReactNode, SelectHTMLAttributes } from "react";
import * as S from "./style";

type SelectType = {
  children: ReactNode;
  onChange: ChangeEventHandler;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ children, onChange, ...rest }: SelectType) => {
  return (
    <S.Select onChange={onChange} {...rest}>
      {children}
    </S.Select>
  );
};

export default Select;
