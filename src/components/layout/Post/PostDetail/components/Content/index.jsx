import { Card, User } from "@/components";
import React from "react";
import style from "./Content.module.scss";

const Content = ({ data = {} }) => {
  return (
    <Card className={style.card}>
      <div className={style.header}>
        <User data={data?.author} />
        <div className={style.date}>21-12-2022</div>
      </div>
      <div className={style.body}>
        <h2 className={style.title}>{data.title}</h2>
        <p className={style.content}>{data?.content}</p>
      </div>
    </Card>
  );
};

export default Content;
