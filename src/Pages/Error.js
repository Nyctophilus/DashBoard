import Button from "../components/UI/Button/Button";
import classes from "./Error.module.scss";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className={classes.Error}>
      <div>
        <h1>404</h1>
        <h3>page not found ⚠️</h3>
        <p>
          We couldn't find the page you are looking for. 😔
        </p>
      </div>

      <img
        src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/pages/404.png"
        alt="worried man"
      />

      <NavLink to="/">
        <Button>back to home</Button>
      </NavLink>
    </div>
  );
};

export default Error;
