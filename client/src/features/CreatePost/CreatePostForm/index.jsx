import React, { useState } from "react";
import style from "./CreatePostForm.module.scss";
import { Button, Input } from "@/components";
import Textarea from "@/components/layout/Textarea";
import { PostsApi } from "@/api";
import { validate } from "@/utils/validation";

const CreatePostForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [postCreated, setPostCreated] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [titleErr, setTitleErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");

  const validateForm = () => {
    let err = "";

    const titleValidator = validate(title, 255, 3, "Tytuł", "text");
    if (titleValidator) {
      setTitleErr(titleValidator);
      err += titleValidator;
    }

    const descriptionValidator = validate(description, 2000, 10, "Treść", "text");
    if (descriptionValidator) {
      setDescriptionErr(descriptionValidator);
      err += descriptionValidator;
    }

    return err.length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = {
      title: title,
      description: description,
    };

    try {
      setIsLoading(true);
      await PostsApi.createPost(data);
      setPostCreated(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return !postCreated ? (
    <form className={style.container} onSubmit={handleSubmit}>
      <Input type="text" label="Tytuł" errorMessage={titleErr} value={title} onChangeText={setTitle} />
      <Textarea
        label="Treść"
        errorMessage={descriptionErr}
        value={description}
        onChange={setDescription}
        isCounting={true}
        maxLength={10000}
      />
      <Button className={style.button} isLoading={isLoading}>
        Utwórz post
      </Button>
    </form>
  ) : (
    <div className={style.container}>
      <h3>Post został utworzony</h3>
      <Button to="/posts" className={style.button}>
        Przeglądaj posty
      </Button>
    </div>
  );
};

export default CreatePostForm;
