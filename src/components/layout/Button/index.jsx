import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import spinner from "@/assets/loader/spinner.svg";
import style from "./Button.module.scss";

const ButtonWrapper = (props) => {
  const { children, to, onClick, className, isLoading = false, disabled = false, id, title } = props;
  const buttonClasses = classNames(style.button, className, {
    [style.disabled]: disabled,
    [style.isLoading]: isLoading,
  });

  const handleOnClick = () => {
    if (!onClick) {
      return;
    } else if (!disabled || isLoading) {
      onClick();
    }
  };

  return to ? (
    <Link className={buttonClasses} style={{ height, width }} onClick={handleOnClick} to={to}>
      {children}
    </Link>
  ) : (
    <button onClick={handleOnClick} className={buttonClasses} disabled={disabled} id={id} title={title}>
      {children}
    </button>
  );
};

const Button = (props) => {
  const { children, isLoading = false, icon, reverse = false } = props;

  const content = (
    <div
      className={classNames(style.wrapper, {
        [style.hidden]: isLoading,
        [style.reverse]: reverse,
      })}
    >
      <span>{children}</span>
      {icon && <img src={icon} alt={"button icon"} className={style.icon} />}
    </div>
  );

  return (
    <ButtonWrapper {...props}>
      {isLoading && <img src={spinner} className={style.loader} alt="loading" />}
      {content}
    </ButtonWrapper>
  );
};

export default Button;
