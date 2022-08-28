import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.scss";

const SidebarItem = ({
  section,
  icon,
  title,
  active,
  setActiveHandler,
}) => {
  const path = title.toLowerCase().split(" ").join("-");

  return (
    <NavLink
      to={path === "dashboard" ? "/" : path}
      className={({ isActive }) =>
        isActive
          ? `${classes.item} ${classes.active}`
          : classes.item
      }
      onClick={() => setActiveHandler(title)}
    >
      {icon}
      <p>{title}</p>
    </NavLink>
  );
};

export default SidebarItem;
