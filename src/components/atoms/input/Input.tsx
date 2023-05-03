import { ChangeEventHandler, InputHTMLAttributes } from "react";
import * as S from "./style";

type InputType = {
  onChange?: ChangeEventHandler;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ onChange, ...rest }: InputType) => {
  return <S.Input onChange={onChange} {...rest} />;
};

export default Input;
