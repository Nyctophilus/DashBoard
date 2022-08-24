import classes from "./WeeklySales.module.scss";
import Sale from "./Sale";
import { ReactComponent as ArrowRaise } from "../../../assets/arrowRaise.svg";
import { ReactComponent as Dollar } from "../../../assets/dollar.svg";

const days = ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"];

const WeeklySales = ({
  sale = { Sa: 69.73, Mo: 22.11 },
}) => {
  let totalSales = 0;

  for (const day in sale) {
    totalSales += sale[day];
  }

  return (
    <>
      <p className="lightText">Total {totalSales}k Sales</p>

      <div className={classes.Week}>
        {days.map((day) => (
          <Sale key={day} day={day} sale={sale} />
        ))}
      </div>

      <div className={classes.iconing}>
        <div className={classes.oneIcon}>
          <span
            className={`${classes.purple} ${classes["with-shaded-bg"]}`}
          >
            <ArrowRaise />
          </span>
          <div className={classes.txt}>
            <p>{totalSales}%</p>
            <p className="lightText">sales</p>
          </div>
        </div>

        <div className={classes.oneIcon}>
          <span
            className={`${classes.green} ${classes["with-shaded-bg"]}`}
          >
            <Dollar />
          </span>
          <div className={classes.txt}>
            <p>{totalSales}k</p>
            <p className="lightText">sales</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklySales;
