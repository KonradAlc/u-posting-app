import { Button, Card } from "@/components";
import React from "react";
import { useParams } from "react-router-dom";
import style from "./UpdatePost.module.scss";
import UpdatePostForm from "./UpdatePostForm";

const UpdatePost = () => {
  const { id } = useParams();

  return (
    <Card className={style.container}>
      <div className={style.header}>
        <h2>Edytuj post</h2>
        <Button to={`/posts/${id}`}>Wróc do postu</Button>
      </div>
      <UpdatePostForm />
    </Card>
  );
};

export default UpdatePost;
