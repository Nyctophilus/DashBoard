import classes from "./BellItem.module.scss";

const BellItem = ({ img, title, text, time }) => {
  return (
    <div className={classes.notifiy}>
      <img className={classes.img} src={img} alt={title} />

      <div className={classes.txt}>
        <p>{title}</p>
        <p>{text}</p>
      </div>

      <p className={classes.time}> {time}</p>
    </div>
  );
};

export default BellItem;
