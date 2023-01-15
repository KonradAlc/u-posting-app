import { PostsApi } from "@/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Button";
import Loader from "../../Loader";
import Comments from "./components/Comments";
import AddComment from "./components/Comments/AddComment";
import Content from "./components/Content";
import style from "./PostDetail.module.scss";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const authUser = useSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [post, setPost] = useState({});
  const [isAuthor, setisAuthor] = useState(false);

  const refreshPost = () => {
    setRefresh(!refresh);
  };

  const onPostDelete = () => {
    navigate("/posts");
  };

  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const response = await PostsApi.getPost(id);
      setPost(response.data);
      setisAuthor(response?.data?.author?.id === authUser.id || authUser.isAdmin);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [refresh]);

  return post ? (
    <div className={style.container}>
      {isAuthor && (
        <Button className={style.updateButton} to={`/update-post/${id}`}>
          Edytuj post
        </Button>
      )}

      <Content data={post} onPostDelete={onPostDelete} />
      <AddComment id={id} onCommentCreate={refreshPost} />
      {post?.comments?.length > 0 && <Comments data={post?.comments} onCommentDelete={refreshPost} />}
    </div>
  ) : (
    <Loader />
  );
};

export default PostDetail;
