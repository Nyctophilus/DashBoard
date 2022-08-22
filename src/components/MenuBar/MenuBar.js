import { createPortal } from "react-dom";
import SideBar from "../SideBar/SideBar";
import Modal from "../UI/Modal/Modal";
import { ReactComponent as MenuBarIcon } from "../../assets/menuBar.svg";
import classes from "./MenuBar.module.scss";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/sidebar-slice";

const animationTiming = {
  enter: 400,
  exit: 800,
};

const MenuBar = () => {
  const { show } = useSelector((state) => state.sidebar);
  // FIXDONE  make modal for sidebar , iusse transtionGroup animations

  const dispatch = useDispatch();
  const clickHandler = () => dispatch(open());

  return (
    <>
      <button
        className={classes.MenuBar}
        onClick={clickHandler}
      >
        <MenuBarIcon />
      </button>

      <CSSTransition
        in={show}
        // nodeRef={container}
        mountOnEnter
        unmountOnExit
        timeout={animationTiming}
        classNames={{
          enter: "",
          enterActive: classes.ModalOpen,
          enterDone: classes.ModalOpen,
          exit: "",
          exitActive: classes.ModalClose,
        }}
      >
        <ModalSidebar />
      </CSSTransition>
    </>
  );
};

const ModalSidebar = () =>
  createPortal(
    <Modal shade>
      <SideBar fromModal />
    </Modal>,
    document.body
  );

export default MenuBar;
