import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return <div className={classes.main}>{children}</div>;
};

export default Layout;
