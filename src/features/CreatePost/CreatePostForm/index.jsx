import React, { useState } from "react";
import style from "./CreatePostForm.module.scss";
import { Button, Input } from "@/components";
import Textarea from "@/components/layout/Textarea";
import { PostsApi } from "@/api";

const CreatePostForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [titleErr, setTitleErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");

  const validate = () => {
    if (title.length < 3) {
      setTitleErr("Tytuł musi mieć conajmniej 3 znaki");
      return false;
    }
    if (description.length < 10) {
      setDescriptionErr("Treść musi mieć conajmniej 10 znaków");
      return false;
    }

    return true;
  };

  const createPostRequest = () => {
    console.log("xd");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = {
      title: title,
      description: description,
      date: new Date().toISOString(),
    };

    try {
      setIsLoading(true);
      await PostsApi.createPost(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <Input type="text" label="Tytuł" errorMessage={titleErr} value={title} onChangeText={setTitle} />
      <Textarea label="Treść" errorMessage={descriptionErr} value={description} onChange={setDescription} />
      <Button className={style.button} isLoading={isLoading}>
        Utwórz post
      </Button>
    </form>
  );
};

export default CreatePostForm;
