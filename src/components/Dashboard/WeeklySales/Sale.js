import classes from "./WeeklySales.module.scss";

const Sale = ({ day, sale }) => {
  const saleLvl = sale[day] - 15;

  return (
    <>
      <div className={classes.DaySale}>
        <span className={classes.singleGraph}></span>
        <span
          className={classes.resultGraph}
          style={{
            "--sales-lvl": `${
              saleLvl > 85 ? 85 : saleLvl
            }%`,
          }}
        ></span>
        {day}
      </div>
    </>
  );
};

export default Sale;
