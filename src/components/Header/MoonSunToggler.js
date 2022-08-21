import { ReactComponent as Moon } from "../../assets/moon.svg";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../store/theme-slice";

const MoonSunToggler = () => {
  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const toggleMoodHandler = () => dispatch(toggle());

  return (
    <button onClick={toggleMoodHandler}>
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
};

export default MoonSunToggler;
