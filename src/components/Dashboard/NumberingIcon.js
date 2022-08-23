import classes from "./Dashboard.module.scss";

const NumberingIcon = ({ img, title, number, color }) => (
  <div className={classes.NumberingIcon}>
    <div style={{ "--custm-bg": color }}>{img}</div>
    <div>
      <p>{title}</p>
      <p>
        <span>{number}</span>
      </p>
    </div>
  </div>
);

export default NumberingIcon;
