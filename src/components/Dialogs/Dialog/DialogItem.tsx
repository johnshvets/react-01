import React from "react";
import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
  id: number;
  name: string;
};

const DialogItem: React.FC<PropsType> = ({ id, name }) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
