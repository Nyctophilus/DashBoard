import classes from "./BellList.module.scss";
import notifications from "../../../Data/notificationData";
import BellItem from "./BellItem";
import { useState } from "react";
import Button from "../../UI/Button/Button";

let timer;

const BellList = () => {
  const [notiClasses, setNotiClasses] = useState(
    classes.sect
  );

  const scrollHandler = () => {
    clearTimeout(timer);
    setNotiClasses(classes.sect);

    timer = setTimeout(() => {
      setNotiClasses(`${classes.sect} ${classes.idle}`);
    }, 3000);
  };

  return (
    <>
      <div className={classes.sect}>
        <span className={classes.head}>notifications</span>
        <span className={classes.badge}>8 new</span>
      </div>
      <div className={notiClasses} onScroll={scrollHandler}>
        {notifications.map((notify) => (
          <BellItem
            key={notify.title + notify.time}
            {...notify}
          />
        ))}
      </div>
      <div className={classes.sect}>
        <Button>read all notifications</Button>
      </div>
    </>
  );
};

export default BellList;
