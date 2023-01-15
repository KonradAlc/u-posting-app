import React from "react";
import classNames from "classnames";

import PlusIcon from "@/assets/icons/closeIcon.svg";

import style from "./CloseButton.module.scss";

const CloseButton = React.forwardRef((props, ref) => {
  const { isOpen = false, className, darkBackground = true, ...rest } = props;

  const buttonClasses = classNames(style.btn, className, {
    [style.btn__darkBackground]: isOpen && darkBackground,
    [style.btn__open]: isOpen,
  });

  return (
    <button ref={ref} className={buttonClasses} {...rest}>
      <img src={PlusIcon} alt="Close icon" className={style.icon} />
    </button>
  );
});

export default CloseButton;
