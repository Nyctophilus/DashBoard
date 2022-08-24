import React from "react";
import BoxMaker from "./BoxMaker";
import classes from "./Dashboard.module.scss";

const SmallBoards = ({
  svg,
  title,
  number,
  transaction,
  time,
  color,
  isSucess,
  img,
  spanColor,
}) => (
  <BoxMaker>
    {svg && (
      <div
        style={{ "--custom-bg": color }}
        className={classes.icon}
      >
        {svg}
      </div>
    )}

    <h6>{title}</h6>
    <p>${number}</p>
    <span
      className={
        isSucess ? classes.success : classes.danger
      }
    >
      {isSucess ? "+" : "-"}
      {transaction}%
    </span>

    <p
      className={`${classes["with-shaded-bg"]} lightText`}
      style={{ "--custom-clr": spanColor && spanColor }}
    >
      {time}
    </p>
    {img && <img src={img} alt={title} />}
  </BoxMaker>
);

export default SmallBoards;
