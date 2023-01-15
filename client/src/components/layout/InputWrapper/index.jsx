import React from "react";
import classNames from "classnames";

import style from "./InputWrapper.module.scss";

const InputWrapper = ({
  id,
  label,
  description,
  children,
  wrapperStyle,
  hideLabel = false,
  errorMessage,
  required = false,
}) => {
  return (
    <div className={wrapperStyle}>
      {label && (
        <div className={style.wrapper}>
          <label
            htmlFor={id}
            className={classNames({
              [style.label]: !hideLabel,
              [style.visuallyHidden]: hideLabel,
            })}
          >
            {label}
            {required && !hideLabel && <span className={style.required}>&nbsp;*</span>}
          </label>
        </div>
      )}
      {description && <p className={style.descriptionField}>{description}</p>}
      {children}
      {errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default InputWrapper;
