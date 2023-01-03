import React, { useState } from "react";
import style from "./HomePage.module.scss";

import { Button, Card, CloseButton, Loader, Modal } from "@/components";

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className={style.container}>
      <Card>card content!</Card>
      <CloseButton />

      <Modal closeModal={() => setIsModalVisible(false)} isOpen={isModalVisible} title="XD">
        <h2>w modalu</h2>
      </Modal>
      <Button onClick={() => setIsModalVisible(true)}>Pokaż modal</Button>

      <Loader />
    </div>
  );
};

export default HomePage;
