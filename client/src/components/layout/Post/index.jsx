import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import User from "../User";

import style from "./Post.module.scss";

const Post = (props) => {
  const { data = {} } = props;

  const date = new Date(data?.created_at).toLocaleDateString();

  return (
    data && (
      <Card className={style.container}>
        <div className={style.header}>
          <User data={data?.author} />
          <div className={style.date}>{date}</div>
        </div>
        <div className={style.body}>
          <Link to={`/posts/${data.id}`}>
            <h2 className={style.title}>{data.title}</h2>
          </Link>
          <p className={style.content}>{data?.description}</p>
        </div>
      </Card>
    )
  );
};

export default Post;
