import React, { useState } from "react";
import { createPortal } from "react-dom";
import SideBar from "../SideBar/SideBar";
import Modal from "../UI/Modal/Modal";
import { ReactComponent as MenuBarIcon } from "../../assets/menuBar.svg";
import classes from "./MenuBar.module.scss";

const MenuBar = () => {
  const [isModal, setIsModal] = useState(false);

  const clickHandler = () => setIsModal(true);

  // FIXME  make modal for sidebar , iusse transtionGroup animations

  return (
    <>
      <button
        className={classes.MenuBar}
        onClick={clickHandler}
      >
        <MenuBarIcon />
      </button>

      {isModal && <ModalSidebar />}
    </>
  );
};

const ModalSidebar = () =>
  createPortal(
    <Modal shade>
      <SideBar />
    </Modal>,
    document.body
  );

export default MenuBar;
