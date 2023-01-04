import React from "react";
import style from "./CreatePost.module.scss";
import CreatePostForm from "./CreatePostForm";

const CreatePost = (props) => {
  return (
    <div className={style.container}>
      <h2>Utwórz post</h2>
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
