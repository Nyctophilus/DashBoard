import Overlay from "./Overlay";

const Modal = ({ children, shade }) => {
  return (
    <>
      {children}
      <Overlay shade={shade} />
    </>
  );
};

export default Modal;
