import { ReactComponent as Moon } from "../../assets/moon.svg";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { useSelector, useDispatch } from "react-redux";
import { initMode, toggle } from "../../store/theme-slice";
import { useEffect } from "react";

const MoonSunToggler = () => {
  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const toggleMoodHandler = () => dispatch(toggle());

  useEffect(() => {
    dispatch(initMode());
  }, [dispatch]);

  return (
    <button onClick={toggleMoodHandler}>
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
};

export default MoonSunToggler;
