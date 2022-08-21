import classes from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as NotificationBill } from "../../assets/notification-bill.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../store/theme-slice";
import { useEffect } from "react";

const Header = () => {
  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleMoodHandler = () => dispatch(toggle());

  useEffect(() => {
    if (!isDark) document.body.classList.add(`light`);
    if (isDark) document.body.classList.remove(`light`);
  }, [isDark]);

  return (
    <header className={classes.header}>
      <a href="./">
        <Logo />
        Materio
      </a>

      <div className={classes.search}>
        <SearchIcon />
        <input type="text" />
      </div>

      <div className={classes.icons}>
        <button onClick={toggleMoodHandler}>
          {isDark ? <Moon /> : <Sun />}
        </button>
        <button>
          <NotificationBill />
        </button>
        <div>
          <img
            src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/avatars/1.png"
            alt="account avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
