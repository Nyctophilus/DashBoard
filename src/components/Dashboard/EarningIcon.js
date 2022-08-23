import classes from "./Dashboard.module.scss";

const EarningIcon = ({
  img,
  title,
  text,
  price,
  color,
  fill,
}) => (
  <div className={classes.earningIcon}>
    <div>
      <img src={img} alt={title} />
      <div>
        <p>{title}</p>
        <p className={classes.lightText}>{text}</p>
      </div>
    </div>
    <div>
      <p>${price}</p>
      <div
        style={{ "--custom-bg": color, "--fill": fill }}
      ></div>
    </div>
  </div>
);

export default EarningIcon;
