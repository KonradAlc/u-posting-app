import React, { useState } from "react";
import style from "../../../auth.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/features/auth/authSlice";

import { Button, Input } from "@/components";
import { AccountsApi } from "@/api";
import { Link } from "react-router-dom";
import { validate } from "@/utils/validation";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    let err = "";

    //err += validate(username, 30, 3, "Nazwa użytkownika", "text");
    if (!username.length > 0) {
      err += `• Nazwa użytkownika jest wymagana.`;
    }
    if (!password.length > 0) {
      err += `${err.length > 0 ? "\n" : ""}• Hasło jest wymagane.`;
    }

    setErrMessage(err);

    return err.length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const userData = {
      username: username,
      password: password,
    };

    try {
      setIsLoading(true);
      const res = await AccountsApi.postLogin(userData);
      dispatch(loginSuccess(res.data));
    } catch (error) {
      if (error?.response?.status === 500) {
        setErrMessage("Wystąpił błąd serwera.");
        return;
      } else {
        setErrMessage(error?.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      {errMessage && <div className={style.errMessage}>{errMessage}</div>}
      <Input type="text" name="username" label="Nazwa użytkownika" value={username} onChangeText={setUsername} />
      <Input type="password" name="password" label="Hasło" value={password} onChangeText={setPassword} />
      <Button className={style.button} type="submit" isLoading={isLoading}>
        Zaloguj się
      </Button>
      <Link to="/register">Nie masz konta? Zarejestruj się</Link>
    </form>
  );
};

export default LoginForm;
