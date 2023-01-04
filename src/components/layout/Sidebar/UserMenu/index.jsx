import React from "react";
import style from "./UserMenu.module.scss";

import { useSelector } from "react-redux";

import Avatar from "@/assets/images/user-image-placeholder.png";

const UserMenu = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);

  return (
    <div className={style.container}>
      <div className={style.userImage}>
        <img src={Avatar} alt="logo" />
      </div>
      <div className={style.userDetails}>
        <div className={style.userName}>Jan Kowalski</div>
      </div>
    </div>
  );
};

export default UserMenu;
