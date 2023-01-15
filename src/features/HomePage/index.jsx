import React, { useEffect, useState } from "react";
import style from "./HomePage.module.scss";

import { Button, Card, CloseButton, Loader, Modal } from "@/components";
import Post from "@/components/layout/Post";
import { PostsApi } from "@/api";

const dummyPosts = [
  {
    id: 1,
    title: "Post 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    author: {
      id: 1,
      username: "Jan Kowalski",
    },
  },
  {
    id: 2,
    title: "Post 2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    author: {
      id: 2,
      username: "Jan Nowak",
    },
  },
  {
    id: 3,
    title: "Post 3",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    author: {
      id: 1,
      username: "Jan Kowalski",
    },
  },
];

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(dummyPosts);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await PostsApi.getPosts();
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={style.container}>
      {isLoading && <Loader />}
      {!isLoading && posts.length === 0 && <h2>Brak postów</h2>}
      {!isLoading && posts.length > 0 && (
        <div className={style.posts}>
          {posts.map((post) => (
            <Post className={style.post} key={`post_${post.id}`} data={post} />
          ))}
        </div>
      )}

      {/* <Modal closeModal={() => setIsModalVisible(false)} isOpen={isModalVisible} title="XD">
        <h2>w modalu</h2>
      </Modal>
      <Button onClick={() => setIsModalVisible(true)}>Pokaż modal</Button>

      <Loader /> */}
    </div>
  );
};

export default HomePage;
