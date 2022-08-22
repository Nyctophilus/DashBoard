import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal/Modal";
import AvatarList from "./AvatarMenu/AvatarList";
import classes from "./SubMenu.module.scss";
import { createPortal } from "react-dom";
import BellList from "./BellMenu/BellList";
import { CSSTransition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const SubMenu = () => {
  const container = useRef();

  const {
    show,
    location: { right, bottom },
    page,
  } = useSelector((state) => state.submenu);

  useEffect(() => {
    const menu = container.current;

    if (menu) {
      menu.style.left = `${right}px`;
      menu.style.top = `${bottom}px`;
    }
  }, [right, bottom]);

  console.log(show);

  return createPortal(
    <CSSTransition
      in={show}
      nodeRef={container}
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
      <div ref={container} className={classes.submenu}>
        <Modal>
          {page === "avatar" && <AvatarList />}
          {page === "bell" && <BellList />}
        </Modal>
      </div>
    </CSSTransition>,
    document.body
  );
};

export default SubMenu;
