import classes from "./Header.module.scss";
import { ReactComponent as NotificationBill } from "../../assets/notification-bill.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MoonSunToggler from "./MoonSunToggler";
import { open } from "../../store/submenu-slice";
import SubMenu from "../SubMenu/SubMenu";
import Avatar from "../Avatar/Avatar";
import SearchBar from "../SearchBar/SearchBar";
import MenuBar from "../MenuBar/MenuBar";
import useScroll from "../../hooks/use-scroll";

const Header = () => {
  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

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

  const isScrollingPassedHeader = useScroll();

  return (
    <>
      <header
        className={
          isScrollingPassedHeader
            ? `${classes.header} ${classes.stickyBlur} bg-blur`
            : classes.header
        }
      >
        <MenuBar />

        <SearchBar />

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

      <SubMenu />
    </>
  );
};

export default Header;
