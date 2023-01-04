import React, { useEffect, useState } from "react";
import style from "./LoginForm.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/features/auth/authSlice";

import { Button, Input } from "@/components";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    dispatch(loginSuccess("xd"));
  };

  useEffect(() => {
    console.log({ username, password });
  }, [username, password]);

  return (
    <div className={style.container}>
      <Input type="text" label="Login" value={username} onChangeText={setUsername} errorMessage={"xd"} />
      <Input type="password" label="Hasło" value={password} onChangeText={setPassword} />
      <Button className={style.button} onClick={login}>
        Zaloguj się
      </Button>
    </div>
  );
};

export default LoginForm;
