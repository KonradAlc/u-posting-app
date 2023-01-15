import React from "react";
import NavLinkButton from "./NavLinkButton";

import style from "./NavMenu.module.scss";

const menu = [
  {
    name: "Blog",
    path: "/posts",
    icon: "blog",
  },
  {
    name: "Dodaj post",
    path: "/create-post",
    icon: "add",
  },
];

const NavMenu = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={style.menu}>
      {menu.map((item) => (
        <NavLinkButton path={item.path} name={item.name} key={`navlink_${item.name}`} />
      ))}
    </div>
  );
};

export default NavMenu;
