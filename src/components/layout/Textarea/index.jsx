import React, { Dispatch, SetStateAction } from "react";
//import TextareaAutosize from "react-textarea-autosize";
import classNames from "classnames";
//import SimpleReactValidator from "simple-react-validator";

import InputWrapper from "@/components/layout/InputWrapper";

import style from "./Textarea.module.scss";

const Textarea = (props) => {
  const {
    className,
    maxLength = 1000,
    placeholder,
    value,
    onChange,
    isCounting = false,
    validator,
    rule,
    label,
    hideLabel,
    wrapperStyle,
    errorMessage,
    id,
    ...rest
  } = props;

  const onChangeProxy = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const classes = classNames(style.textarea, className, {
    [style.error]: errorMessage,
  });

  return (
    <InputWrapper
      validator={validator}
      rule={rule}
      errorMessage={errorMessage}
      label={label}
      id={id}
      hideLabel={hideLabel}
      wrapperStyle={wrapperStyle}
    >
      <div className={style.wrapperArea}>
        <textarea
          className={classes}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={onChangeProxy}
          {...rest}
        ></textarea>
        {isCounting && (
          <p className={style.counter}>
            {value?.length} / {maxLength}
          </p>
        )}
      </div>
    </InputWrapper>
  );
};

export default Textarea;
