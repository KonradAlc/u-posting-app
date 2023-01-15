import React, { useState } from "react";
import Card from "../../Card";
import Comments from "./components/Comments";
import AddComment from "./components/Comments/AddComment";
import Content from "./components/Content";
import style from "./PostDetail.module.scss";

const dummyPost = {
  id: 1,
  title: "Post 1",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. ",
  author: {
    id: 1,
    username: "Jan Kowalski",
  },
  comments: [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      post_id: 1,
      author: {
        id: 1,
        username: "Jan Kowalski",
      },
    },
    {
      id: 2,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      post_id: 1,
      author: {
        id: 2,
        username: "Jan Nowak",
      },
    },
  ],
};
const PostDetail = () => {
  const [post, setPost] = useState(dummyPost);

  return (
    <div className={style.container}>
      <Content data={post} />
      <AddComment />
      <Comments data={post.comments} />
    </div>
  );
};

export default PostDetail;
