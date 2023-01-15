import React, { useEffect, useState } from "react";
import style from "./UpdatePostForm.module.scss";
import { Button, Input } from "@/components";
import Textarea from "@/components/layout/Textarea";
import { PostsApi } from "@/api";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdatePostForm = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const authUser = useSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [titleErr, setTitleErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");

  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const response = await PostsApi.getPost(id);
      if (response?.data?.author?.id === authUser.id || authUser.isAdmin) {
        setTitle(response?.data?.title || "");
        setDescription(response?.data?.description || "");
      } else {
        navigate(`/posts/${id}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = {
      title: title,
      description: description,
    };

    try {
      setIsLoading(true);
      await PostsApi.updatePost(id, data);
      navigate(`/posts/${id}`);
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
        Edytuj post
      </Button>
    </form>
  );
};

export default UpdatePostForm;
