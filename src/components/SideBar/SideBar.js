import React, { useState } from "react";
import Logo from "../UI/Logo/Logo";
import classes from "./SideBar.module.scss";
import sidebarData from "../../Data/sidebarData";
import SidebarItem from "./SidebarItem";
import { ReactComponent as ToggleBtn } from "../../assets/toggleBtn.svg";

const SideBar = ({ isMain }) => {
  const [active, setActive] = useState("dashboard");
  const [isShow, setIsShow] = useState(true);

  const setActiveHandler = (title) => setActive(title);

  const showBarHanlder = () => {
    setIsShow((prev) => !prev);
  };

  const hoverHandler = () => {
    if (!isShow) setIsShow((prev) => !prev);
  };

  const sidebarClasses = isMain
    ? isShow
      ? `${classes.SideBar} ${classes.main}`
      : `${classes.SideBar} ${classes.main} ${classes.collapse}`
    : isShow
    ? classes.SideBar
    : `${classes.SideBar} ${classes.collapse}`;

  return (
    <nav
      className={sidebarClasses}
      onMouseEnter={hoverHandler}
    >
      <div className={classes.head}>
        <Logo collapse={isShow} />
        <ToggleBtn onClick={showBarHanlder} />
      </div>

      {sidebarData
        .filter((item) => item.section === "none")
        .map((item) => (
          <SidebarItem
            key={item.title}
            {...item}
            active={active}
            setActiveHandler={setActiveHandler}
          />
        ))}

      <div className={classes.box}>
        <h2>apps and pages</h2>
        {sidebarData
          .filter(
            (item) => item.section === "apps and pages"
          )
          .map((item) => (
            <SidebarItem
              key={item.title}
              {...item}
              active={active}
              setActiveHandler={setActiveHandler}
            />
          ))}
      </div>

      <div className={classes.box}>
        <h2>user interface</h2>
        {sidebarData
          .filter(
            (item) => item.section === "user interface"
          )
          .map((item) => (
            <SidebarItem
              key={item.title}
              {...item}
              active={active}
              setActiveHandler={setActiveHandler}
            />
          ))}
      </div>

      <div className={classes.foot}>
        <img
          src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/misc/upgrade-banner-dark.png"
          alt="sidebar footer"
        />
      </div>
    </nav>
  );
};

export default SideBar;
