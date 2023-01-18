import React, { useState } from "react";
import style from "../../../auth.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/features/auth/authSlice";
import { validate } from "@/utils/validation";

import { Button, Input } from "@/components";
import { AccountsApi } from "@/api";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const validateForm = () => {
    let err = "";

    err += validate(username, 30, 3, "Nazwa użytkownika", "text");
    err += validate(password, 30, 6, "Hasło", "text");

    if (password !== repeatPassword) {
      err += `${err.length > 0 ? "\n• " : ""}Hasła muszą być takie same.`;
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
      const res = await AccountsApi.postRegister(userData);
      setSuccess(true);
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

  return success ? (
    <div className={style.container}>
      <h3 className={style.successMessage}>Rejestracja przebiegła pomyślnie!</h3>
      <Button to="/login">Przjdź do logowania</Button>
    </div>
  ) : (
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
