import React from "react";
import style from "./UserMenu.module.scss";

import { useSelector } from "react-redux";

import Avatar from "@/assets/images/user-image-placeholder.png";

const UserMenu = (props) => {
  const authUser = useSelector((state) => state.auth);

  return (
    <div className={style.container}>
      <div className={style.userImage}>
        <img src={Avatar} alt="logo" />
      </div>
      <div className={style.userDetails}>
        <div className={style.userName}>{authUser.username || "Brak nazwy"}</div>
      </div>
    </div>
  );
};

export default UserMenu;
