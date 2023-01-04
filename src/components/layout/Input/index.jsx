import React, { forwardRef, useState } from "react";
import classNames from "classnames";

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
    required,
    errorMessage,
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
    [style.input__error]: !!errorMessage,
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
      required={required}
    />
  );

  return (
    <InputWrapper label={label} errorMessage={errorMessage} required={required}>
      {input}
    </InputWrapper>
  );
});

export default Input;
