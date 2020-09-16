import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink
            to="/profile"
            className={classes.link}
            activeClassName={classes.active}
          >
            Profile
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="/dialogs"
            className={classes.link}
            activeClassName={classes.active}
          >
            Messages
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="/users"
            className={classes.link}
            activeClassName={classes.active}
          >
            Users
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="/news"
            className={classes.link}
            activeClassName={classes.active}
          >
            News
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="/music"
            className={classes.link}
            activeClassName={classes.active}
          >
            Music
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/settings"
            className={classes.link}
            activeClassName={classes.active}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
