import React, { useState } from "react";
import style from "../../../auth.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/features/auth/authSlice";

import { Button, Input } from "@/components";
import { AccountsApi } from "@/api";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const validate = () => {
    if (password !== repeatPassword) {
      setErrMessage("Hasła muszą być takie same.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const userData = {
      username: username,
      password: password,
    };

    try {
      setIsLoading(true);
      const res = await AccountsApi.postRegister(userData);
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
      <Input
        type="password"
        name="repeatPassword"
        label="Powtórz hasło"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
      />
      <Button className={style.button} type="submit" isLoading={isLoading}>
        Zarejestruj się
      </Button>
      <Link to="/login">Masz już konto? Zaloguj się</Link>
    </form>
  );
};

export default RegisterForm;
