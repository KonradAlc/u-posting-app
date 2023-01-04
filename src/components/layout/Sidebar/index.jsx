import React from "react";
import style from "./Sidebar.module.scss";

import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "@/features/auth/authSlice";

import Logo from "@/assets/images/logo.png";
import Button from "../Button";
import UserMenu from "./UserMenu";
import NavMenu from "./NavMenu";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={style.container}>
      <div className={style.main}>
        <UserMenu />
        {/* <div className={style.brand}>
          <img src={Logo} alt="logo" />
          uPosting
        </div> */}
        <NavMenu />
      </div>

      <footer className={style.footer}>
        <Button className={style.button} onClick={handleLogout}>
          Wyloguj się
        </Button>
      </footer>
    </nav>
  );
};

export default Sidebar;
