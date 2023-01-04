import React, { useState } from "react";
import style from "./HomePage.module.scss";

import { Button, Card, CloseButton, Loader, Modal } from "@/components";
import Post from "@/components/layout/Post";

const dummyPosts = [
  {
    id: 1,
    title: "Post 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <div className={style.container}>
      <div className={style.posts}>
        {posts.map((post) => (
          <Post className={style.post} key={`post_${post.id}`} data={post} />
        ))}
      </div>

      {/* <Modal closeModal={() => setIsModalVisible(false)} isOpen={isModalVisible} title="XD">
        <h2>w modalu</h2>
      </Modal>
      <Button onClick={() => setIsModalVisible(true)}>Pokaż modal</Button>

      <Loader /> */}
    </div>
  );
};

export default HomePage;
