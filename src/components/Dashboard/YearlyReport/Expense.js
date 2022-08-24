import classes from "./Expense.module.scss";

const Expense = ({ month, earnVsExpense }) => {
  console.log(earnVsExpense);

  const earnlvl = earnVsExpense.earn / 2;
  const expenselvl = earnVsExpense.expense / 2;

  return (
    <div className={classes.contn}>
      <span
        className={classes.earning}
        style={{
          "--earning-lvl": `${
            earnlvl > 50 ? 50 : earnlvl
          }%`,
        }}
      ></span>
      <span
        className={classes.expense}
        style={{
          "--expense-lvl": `${
            expenselvl > 50 ? 50 : expenselvl
          }%`,
        }}
      ></span>
    </div>
  );
};

export default Expense;
