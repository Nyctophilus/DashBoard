import earningData from "../../Data/earningData";
import numberingIconsData from "../../Data/numberingIconsData";
import smallBoardsData from "../../Data/smallBoardsData";
import Button from "../UI/Button/Button";
import BoxMaker from "./BoxMaker";
import classes from "./Dashboard.module.scss";
import EarningIcon from "./EarningIcon";
import NumberingIcon from "./NumberingIcon";
import SmallBoards from "./SmallBoards";

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

      <div>Weekly Overview</div>

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

      {smallBoardsData.map((board) => (
        <SmallBoards key={board.svg} {...board} />
      ))}

      <div>Revenue Report</div>
      <div>Total Growth</div>
      <div>Ratings</div>
    </section>
  );
};

export default Dashboard;
