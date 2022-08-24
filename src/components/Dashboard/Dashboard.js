import earningData from "../../Data/earningData";
import numberingIconsData from "../../Data/numberingIconsData";
import smallBoardsData from "../../Data/smallBoardsData";
import Button from "../UI/Button/Button";
import BoxMaker from "./BoxMaker";
import classes from "./Dashboard.module.scss";
import EarningIcon from "./EarningIcon";
import NumberingIcon from "./NumberingIcon";
import SmallBoards from "./SmallBoards";
import WeeklySales from "./WeeklySales/WeeklySales";

const Dashboard = () => {
  return (
    <section className={classes.Dashboard}>
      <BoxMaker title="Congratulations Mo! 🥳">
        <p className={classes.lightText}>
          Best seller of the month
        </p>
        <span>$42.8k</span>
        <Button>view sales</Button>
        <img
          src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/misc/trophy.png"
          alt="trophy"
        />
      </BoxMaker>

      <BoxMaker title="Statistics Card">
        <p>
          <span>Total 48.5% growth</span> 😎{" "}
          <span
            style={{
              filter: "brightness(0.7)",
              fontWeight: "normal",
            }}
          >
            {" "}
            this month
          </span>
        </p>
        <div className={classes.numbering}>
          {numberingIconsData.map((icon) => (
            <NumberingIcon
              key={icon.title + icon.number}
              {...icon}
            />
          ))}
        </div>
      </BoxMaker>

      <BoxMaker title="Weekly Overview">
        <WeeklySales />
      </BoxMaker>

      <BoxMaker title="Total Earning">
        <h6>
          $24,895 <span>+ 10%</span>
        </h6>
        <p className={classes.lightText}>
          Compared to $84,325 last year
        </p>
        <div className={classes.earnings}>
          {earningData.map((icon) => (
            <EarningIcon
              key={icon.title + icon.number}
              {...icon}
            />
          ))}
        </div>
      </BoxMaker>

      {smallBoardsData.slice(0, -2).map((board) => (
        <SmallBoards
          key={board.svg + board.time}
          {...board}
        />
      ))}

      <BoxMaker title="Revenue Report"></BoxMaker>

      {smallBoardsData.slice(-2).map((board) => (
        <SmallBoards
          key={board.svg + board.time}
          {...board}
        />
      ))}
    </section>
  );
};

export default Dashboard;
