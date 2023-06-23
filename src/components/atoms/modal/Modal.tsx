import { ReactNode, useContext } from "react";
import { ModalContext } from "components/organisms/TaskDisplay/TaskDisplay";
import * as S from "./style";

type ModalType = {
  children: ReactNode;
};

const Modal = ({ children, ...rest }: ModalType) => {
  const { setIsShow } = useContext(ModalContext);

  return (
    <S.Modal onClick={() => setIsShow(false)} {...rest}>
      {children}
    </S.Modal>
  );
};

export default Modal;
