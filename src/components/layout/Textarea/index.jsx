import React, { Dispatch, SetStateAction } from "react";
import TextareaAutosize from "react-textarea-autosize";
import classNames from "classnames";
//import SimpleReactValidator from "simple-react-validator";

import InputWrapper, { getWrapperProps } from "@/components/layout/InputWrapper";

import style from "./Textarea.module.scss";

const Textarea = (props) => {
  const wrapperProps = getWrapperProps(props);
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
    id,
    ...rest
  } = props;

  const onChangeProxy = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const classes = classNames(style.textarea, className, {
    [style.error]: wrapperProps.hasError,
  });

  return (
    <InputWrapper
      validator={validator}
      rule={rule}
      errorMessage={wrapperProps.errorMessage}
      label={label}
      id={id}
      hideLabel={hideLabel}
      wrapperStyle={wrapperStyle}
    >
      <div className={style.wrapperArea}>
        <TextareaAutosize
          className={classes}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={onChangeProxy}
          {...rest}
        />
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
