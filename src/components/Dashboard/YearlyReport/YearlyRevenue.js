import Expense from "./Expense";
import classes from "./YearlyRevenue.module.scss";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const YearlyRevenue = ({
  earnVsExpense = {
    Jan: { earn: 60, expense: 0 },
    Feb: { earn: 10, expense: 0 },
    Mar: { earn: 30, expense: 0 },
    Apr: { earn: 11, expense: 20 },
    May: { earn: 80, expense: 0 },
    Jun: { earn: 30, expense: 30 },
    Jul: { earn: 7, expense: 40 },
    Aug: { earn: 44, expense: 80 },
    Sep: { earn: 2, expense: 10 },
    Oct: { earn: 0, expense: 333 },
    Nov: { earn: 22, expense: 122 },
    Dec: { earn: 0, expense: 100 },
  },
}) => {
  return (
    <>
      <p className={classes["with-shade-bg"]}>This Year</p>

      <div className={classes.expenses}>
        {months.map((mon) => (
          <Expense
            key={mon}
            month={mon}
            earnVsExpense={earnVsExpense[mon]}
          />
        ))}
      </div>

      <div className={classes.listing}>
        <div>
          <span
            style={{ "--custom-bg": "rgb(86, 202, 0)" }}
          ></span>
          <p>earning</p>
        </div>
        <div>
          <span
            style={{ "--custom-bg": "rgb(138, 141, 147)" }}
          ></span>
          <p>expense</p>
        </div>
      </div>
    </>
  );
};

export default YearlyRevenue;
