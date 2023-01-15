import React from "react";
import style from "../../auth.module.scss";
import LoginForm from "./LoginForm";
import Logo from "@/assets/images/logo.png";

const Login = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.branding}>
        <img src={Logo} alt="logo" />
        uPosting
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
