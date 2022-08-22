import classes from "./SideBar.module.scss";

const SidebarItem = ({
  section,
  icon,
  title,
  active,
  setActiveHandler,
}) => {
  return (
    <div
      className={
        active === title
          ? `${classes.item} ${classes.active}`
          : classes.item
      }
      onClick={() => setActiveHandler(title)}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default SidebarItem;
