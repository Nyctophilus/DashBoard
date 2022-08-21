import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal/Modal";
import AvatarList from "./AvatarList";
import classes from "./SubMenu.module.scss";
import { createPortal } from "react-dom";
import BellList from "./Bell/BellList";

const SubMenu = () => {
  const container = useRef();
  const {
    show,
    location: { right, bottom },
    page,
  } = useSelector((state) => state.submenu);

  useEffect(() => {
    const menu = container.current;

    menu.style.left = `${right}px`;
    menu.style.top = `${bottom}px`;
  }, [right, bottom]);

  return createPortal(
    <div
      ref={container}
      className={
        show
          ? `${classes.submenu} ${classes.open}`
          : classes.submenu
      }
    >
      <Modal>
        {page === "avatar" && <AvatarList />}
        {page === "bell" && <BellList />}
      </Modal>
    </div>,
    document.body
  );
};

export default SubMenu;
