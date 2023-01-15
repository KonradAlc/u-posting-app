import { Card } from "@/components";
import React from "react";
import style from "./CreatePost.module.scss";
import CreatePostForm from "./CreatePostForm";

const CreatePost = (props) => {
  return (
    <Card className={style.container}>
      <h2>Utwórz post</h2>
      <CreatePostForm />
    </Card>
  );
};

export default CreatePost;
