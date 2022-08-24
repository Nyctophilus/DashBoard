import classes from "./WeeklySales.module.scss";

const Sale = ({ day, sale }) => {
  const saleLvl = sale[day] * 2;

  return (
    <>
      <div className={classes.DaySale}>
        <span className={classes.singleGraph}></span>
        <span
          className={classes.resultGraph}
          style={{ "--sales-lvl": `${saleLvl}px` }}
        ></span>
        {day}
      </div>
    </>
  );
};

export default Sale;
