import { PostsApi } from "@/api";
import { Button, Card } from "@/components";
import Textarea from "@/components/layout/Textarea";
import { validate } from "@/utils/validation";
import React, { useState } from "react";
import style from "./AddComment.module.scss";

const AddComment = ({ id, onCommentCreate = () => {} }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const validateForm = () => {
    let err = "";

    const commentValidator = validate(comment, 255, 2, "Komentarz", "text");
    if (commentValidator) {
      setErrMessage(commentValidator);
      err += commentValidator;
    }

    return err.length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const data = {
      post_id: id,
      description: comment,
    };

    try {
      setIsLoading(true);
      await PostsApi.createComment(data);
      onCommentCreate();
    } catch (error) {
      if (error?.response?.status === 500) {
        setErrMessage("Wystąpił błąd serwera.");
        return;
      } else {
        setErrMessage(error?.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={style.card}>
      <h3>Dodaj komentarz</h3>
      <form className={style.container} onSubmit={handleSubmit}>
        <Textarea
          className={style.textarea}
          onChange={setComment}
          value={comment}
          placeholder="Podziel się swoją opinią..."
          errorMessage={errMessage}
        />
        <Button className={style.button} isLoading={isLoading}>
          Opublikuj
        </Button>
      </form>
    </Card>
  );
};

export default AddComment;
