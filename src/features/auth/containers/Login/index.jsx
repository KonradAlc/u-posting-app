import React from "react";
import style from "./Login.module.scss";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>uPosting</div>
      <LoginForm />
    </div>
  );
};

export default Login;
