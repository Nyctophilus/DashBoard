import classes from "./Dashboard.module.scss";
import { ReactComponent as ThreeDotsIcon } from "../../assets/3dots-col.svg";

const BoxMaker = ({ children, title }) => (
  <div>
    {title && <h2>{title}</h2>}
    {children}
    <ThreeDotsIcon className={classes.dots} />
  </div>
);

export default BoxMaker;
