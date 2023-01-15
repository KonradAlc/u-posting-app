import { Card } from "@/components";
import React from "react";
import Comment from "./Comment";
import style from "./Comments.module.scss";

const Comments = ({ data = [] }) => {
  return (
    <div className={style.container}>
      {data.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default Comments;
