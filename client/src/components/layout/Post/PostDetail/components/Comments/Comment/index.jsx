import { Card } from "@/components";
import React from "react";
import style from "./Comment.module.scss";
import { User } from "@/components";
import DeleteIcon from "@/assets/icons/closeIcon.svg";
import { PostsApi } from "@/api";
import { useSelector } from "react-redux";

const Comment = ({ data = {}, onCommentDelete = () => {} }) => {
  const date = new Date(data?.created_at).toLocaleDateString();
  const authUser = useSelector((state) => state.auth);
  const deletePermission = data?.author?.id === authUser.id || authUser.isAdmin;

  const handleDelete = async () => {
    if (!deletePermission) return;

    try {
      await PostsApi.deleteComment(data.id);
      onCommentDelete();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className={style.card}>
      <div className={style.header}>
        <User data={data?.author} />
        <div className={style.date}>{date || ""}</div>
      </div>
      <div className={style.body}>
        <p className={style.content}>{data?.content}</p>
      </div>
      {deletePermission && (
        <button className={style.deleteButton} onClick={handleDelete}>
          <img src={DeleteIcon} alt="" />
        </button>
      )}
    </Card>
  );
};

export default Comment;
