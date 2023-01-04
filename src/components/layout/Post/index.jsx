import React from "react";
import Card from "../Card";
import style from "./Post.module.scss";

const Post = (props) => {
  const { children, className, data = {}, ...rest } = props;
  return (
    data && (
      <Card className={style.container}>
        <h2 className={style.title}>{data.title}</h2>
        <div className={style.content}>{data.content}</div>
      </Card>
    )
  );
};

export default Post;
