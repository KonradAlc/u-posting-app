import { Card } from "@/components";
import React from "react";
import style from "./Comment.module.scss";
import { User } from "@/components";

const Comment = ({ data = {} }) => {
  return (
    <Card className={style.card}>
      <div className={style.header}>
        <User data={data?.author} />
        <div className={style.date}>21-12-2022</div>
      </div>
      <div className={style.body}>
        <p className={style.content}>{data?.content}</p>
      </div>
    </Card>
  );
};

export default Comment;
