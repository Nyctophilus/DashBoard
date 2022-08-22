import { ReactComponent as LogoImg } from "../../../assets/logo.svg";
import classes from "./Logo.module.scss";

const Logo = ({ collapse }) => (
  <a href="./" className={classes.logoLink}>
    <LogoImg />
    {collapse && "Materio"}
  </a>
);

export default Logo;
