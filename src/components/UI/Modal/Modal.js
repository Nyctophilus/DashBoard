import Overlay from "./Overlay";

// FIXME add GroupTranistion for animations

const Modal = ({ children, shade }) => {
  return (
    <>
      {children}

      <Overlay shade={shade} />
    </>
  );
};

export default Modal;
