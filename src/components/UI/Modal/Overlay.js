import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { close as closeSubMenu } from "../../../store/submenu-slice";
import { close as closeSideBar } from "../../../store/sidebar-slice";
import classes from "./Overlay.module.scss";

const Overlay = ({ shade }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    if (!shade) dispatch(closeSubMenu());

    if (shade) dispatch(closeSideBar());
  };

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
