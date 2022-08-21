import Overlay from "./Overlay";

// FIXME add GroupTranistion for animations

const Modal = ({ children }) => {
  return (
    <>
      {children}

      <Overlay />
    </>
  );
};

export default Modal;
