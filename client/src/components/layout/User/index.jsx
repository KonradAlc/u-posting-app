import React from "react";
import style from "./User.module.scss";

import Avatar from "@/assets/images/user-image-placeholder.png";

const User = ({ data = {} }) => {
  return (
    <div className={style.container}>
      <div className={style.userImage}>
        <img src={Avatar} alt="logo" />
      </div>
      <div className={style.userDetails}>
        <div className={style.userName}>{data.username}</div>
      </div>
    </div>
  );
};

export default User;
