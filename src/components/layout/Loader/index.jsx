import React from "react";
import classNames from "classnames";

import loaderGrey from "@/assets/loader/spinner.svg";

import style from "./Loader.module.scss";

const Loader = (props) => {
  const { contentIndicator, global, className, prefix } = props;

  const classes = classNames(style.loader, {
    [style.contentIndicator]: contentIndicator,
    [style.global]: global,
  });

  return (
    <div className={classes} data-testid="loader">
      {!!prefix && prefix}
      <img className={className} src={loaderGrey} alt="loader" />
    </div>
  );
};

export default Loader;
