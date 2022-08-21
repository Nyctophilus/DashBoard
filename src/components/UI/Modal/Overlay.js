import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { close } from "../../../store/submenu-slice";
import classes from "./Overlay.module.scss";

const Overlay = ({ shade }) => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(close());

  return createPortal(
    <div
      className={
        shade
          ? `${classes.overlay} ${classes.shade}`
          : classes.overlay
      }
      onClick={closeModal}
    ></div>,
    document.body
  );
};

export default Overlay;
