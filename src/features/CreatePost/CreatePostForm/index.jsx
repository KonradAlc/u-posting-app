import React, { useState } from "react";
import style from "./CreatePostForm.module.scss";
import { Button, Input } from "@/components";
import Textarea from "@/components/layout/Textarea";

const CreatePostForm = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const createPostRequest = () => {
    console.log("xd");
  };

  return (
    <form className={style.container}>
      <Input type="text" label="Tytuł" value={title} onChangeText={setTitle} />
      <Textarea label="Treść" value={text} onChange={setText} />
      <Button className={style.button} onClick={createPostRequest}>
        Utwórz post
      </Button>
    </form>
  );
};

export default CreatePostForm;
