import React, { forwardRef, useState } from "react";
import classNames from "classnames";
//import _ from "lodash";

import InputWrapper from "../InputWrapper";

import style from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {
  //const wrapperProps = getWrapperProps(props);
  const {
    onChangeText,
    placeholder,
    className,
    id,
    icon,
    type = "text",
    onClick,
    readOnly,
    disabled,
    showError,
    label = "",
    ...rest
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  const onChangeProxy = (e) => {
    if (onChangeText) {
      onChangeText(e.target.value);
    }
  };

  const inputClasses = classNames(style.input, className, {
    [style.input__error]: showError,
    [style.readOnlyInput]: readOnly,
  });

  const input = (
    <input
      id={id}
      ref={ref}
      className={inputClasses}
      placeholder={placeholder}
      onChange={onChangeProxy}
      type={type}
      disabled={disabled || readOnly}
      //{...otherProps}
    />
  );

  return <InputWrapper label={label}>{input}</InputWrapper>;
});

export default Input;
