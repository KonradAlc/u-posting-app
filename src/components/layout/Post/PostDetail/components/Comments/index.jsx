import { Card } from "@/components";
import React from "react";
import Comment from "./Comment";
import style from "./Comments.module.scss";

const Comments = ({ data = [], onCommentDelete }) => {
  return (
    <div className={style.container}>
      {data.map((comment) => (
        <Comment key={comment.id} data={comment} onCommentDelete={onCommentDelete} />
      ))}
    </div>
  );
};

export default Comments;
