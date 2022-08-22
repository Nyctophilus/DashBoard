import Logo from "../UI/Logo/Logo";
import classes from "./SideBar.module.scss";
import sidebarData from "../../Data/sidebarData";
import SidebarItem from "./SidebarItem";
import { ReactComponent as ToggleBtn } from "../../assets/toggleBtn.svg";
import { ReactComponent as Xbutton } from "../../assets/x.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  uncollapse,
  collapse,
  setActiveBar,
  close,
} from "../../store/sidebar-slice";

const SideBar = ({ isMain, fromModal }) => {
  const { isCollapsed, activeBar } = useSelector(
    (state) => state.sidebar
  );
  const dispatch = useDispatch();

  const setActiveHandler = (title) =>
    dispatch(setActiveBar(title));

  const collapseBarHanlder = () => dispatch(collapse());

  const hoverHandler = () => {
    if (!isCollapsed) dispatch(uncollapse());
  };

  const sidebarClasses = isMain
    ? isCollapsed
      ? `${classes.SideBar} ${classes.main}`
      : `${classes.SideBar} ${classes.main} ${classes.collapse}`
    : isCollapsed
    ? `${fromModal && ` ${classes.fromModal}`} ${
        classes.SideBar
      }`
    : `${classes.SideBar} ${classes.collapse}`;

  const closeSideBar = () => dispatch(close());

  return (
    <nav
      className={sidebarClasses}
      onMouseEnter={hoverHandler}
    >
      <div className={classes.head}>
        <Logo collapse={isCollapsed} />

        {isMain && (
          <ToggleBtn onClick={collapseBarHanlder} />
        )}

        {fromModal && <Xbutton onClick={closeSideBar} />}
      </div>

      {sidebarData
        .filter((item) => item.section === "none")
        .map((item) => (
          <SidebarItem
            key={item.title}
            {...item}
            active={activeBar}
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
              active={activeBar}
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
              active={activeBar}
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
