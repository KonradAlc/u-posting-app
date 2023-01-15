import React from "react";
import classnames from "classnames";

import classes from "./Card.module.scss";

const Card = (props) => {
  const { className, children, style, onClick, shadow = true, color = "white", ...rest } = props;

  const cardClassName = classnames(classes.card, className, {
    [classes.card__shadow]: shadow,
  });

  return (
    <div className={cardClassName} style={style} onClick={onClick} {...rest}>
      {children}
    </div>
  );
};

export default Card;
