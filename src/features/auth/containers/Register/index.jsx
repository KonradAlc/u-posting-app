import React from "react";
import style from "../../auth.module.scss";
import Logo from "@/assets/images/logo.png";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.branding}>
        <img src={Logo} alt="logo" />
        uPosting
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
