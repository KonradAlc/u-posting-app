import React, { useEffect, useState } from "react";
import style from "./MyPosts.module.scss";

import { Loader } from "@/components";
import Post from "@/components/layout/Post";
import { AccountsApi, PostsApi } from "@/api";

const MyPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await AccountsApi.getUserPosts();
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

export default MyPosts;
