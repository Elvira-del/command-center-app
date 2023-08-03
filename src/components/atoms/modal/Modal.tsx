import { ReactNode, useContext } from "react";
import { ModalContext } from "components/organisms/TaskDisplay/TaskDisplay";
import * as S from "./style";

type ModalType = {
  onSwitchEdit: () => void;
  children: ReactNode;
};

const Modal = ({ onSwitchEdit, children, ...rest }: ModalType) => {
  const { setIsShow } = useContext(ModalContext);

  const handleCloseModal = () => {
    setIsShow(false);
    onSwitchEdit();
  };

  return (
    <S.Modal onClick={handleCloseModal} {...rest}>
      {children}
    </S.Modal>
  );
};

export default Modal;
