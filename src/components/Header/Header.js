import classes from "./Header.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import { ReactComponent as NotificationBill } from "../../assets/notification-bill.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Logo from "./Logo";
import MoonSunToggler from "./MoonSunToggler";
import { open } from "../../store/submenu-slice";
import SubMenu from "../SubMenu/SubMenu";
import Avatar from "./Avatar";

const Header = () => {
  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const { show: isSubMenu } = useSelector(
    (state) => state.submenu
  );

  useEffect(() => {
    if (!isDark) document.body.classList.add(`light`);
    if (isDark) document.body.classList.remove(`light`);
  }, [isDark]);

  const openSubMenuHanlder = (e, page) => {
    const tempBtn = e.target.getBoundingClientRect();
    const { right, bottom } = {
      right: tempBtn.right,
      bottom: tempBtn.bottom + 10,
    };

    dispatch(open({ loc: { right, bottom }, page }));
  };

  return (
    <>
      <header className={classes.header}>
        <Logo />

        <div className={classes.search}>
          <SearchIcon />
          <input type="text" />
        </div>

        <div className={classes.icons}>
          <MoonSunToggler />

          <button
            onClick={(e) => openSubMenuHanlder(e, "bell")}
          >
            <NotificationBill />
          </button>

          <Avatar openSubMenuHanlder={openSubMenuHanlder} />
        </div>
      </header>

      {isSubMenu && <SubMenu />}
    </>
  );
};

export default Header;
