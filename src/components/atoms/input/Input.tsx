import { ChangeEventHandler, InputHTMLAttributes } from "react";
import * as S from "./style";

type InputProps = {
  onChange?: ChangeEventHandler;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ onChange, ...rest }: InputProps) => {
  return <S.Input onChange={onChange} {...rest} />;
};

export default Input;
