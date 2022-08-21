import classes from "./BellList.module.scss";
import notifications from "../../../notificationData";
import BellItem from "./BellItem";
import { useState } from "react";

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
        <button>read all notifications</button>
      </div>
    </>
  );
};

export default BellList;
