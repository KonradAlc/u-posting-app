import { PostsApi } from "@/api";
import { Button, Card, Modal, User } from "@/components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./Content.module.scss";
import DeleteIcon from "@/assets/icons/closeIcon.svg";

const Content = ({ data = {}, onPostDelete = () => {} }) => {
  const date = new Date(data?.created_at).toLocaleDateString();
  const authUser = useSelector((state) => state.auth);
  const deletePermission = data?.author?.id === authUser.id || authUser.isAdmin;

  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (!deletePermission) return;

    try {
      await PostsApi.deletePost(data.id);
      onPostDelete();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    data && (
      <>
        <Card className={style.card}>
          <div className={style.header}>
            <User data={data?.author} />
            <div className={style.date}>{date || ""}</div>
          </div>
          <div className={style.body}>
            <h2 className={style.title}>{data?.title || "Brak tytułu"}</h2>
            <p className={style.content}>{data?.description}</p>
          </div>
          {deletePermission && (
            <button className={style.deleteButton} onClick={() => setModalVisible(true)}>
              <img src={DeleteIcon} alt="" />
            </button>
          )}
        </Card>
        <Modal title="Potwierdź usunięcie" closeModal={() => setModalVisible(false)} isOpen={modalVisible}>
          <div className={style.modalContainer}>
            <h3>Czy na pewno chcesz usunąć ten post?</h3>
            <Button className={style.button} onClick={handleDelete}>
              Usuń
            </Button>
          </div>
        </Modal>
      </>
    )
  );
};

export default Content;
