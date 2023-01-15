import React from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";

import style from "./NavLinkButton.module.scss";

const NavLinkButton = (props) => {
  const { children, className, path, name, icon, ...rest } = props;

  return (
    <NavLink to={path} className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}>
      {name}
    </NavLink>
  );
};

export default NavLinkButton;
