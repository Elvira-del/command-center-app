import React from "react";
import * as S from "./style";

interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  children: React.ReactNode;
}

const Select = ({ children, ...other }: SelectProps) => {
  return <S.Select>{children}</S.Select>;
};

export default Select;
