import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "@/components";

import style from "./Page.module.scss";

const Page = (props) => {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.page}>
        <div className={style.inner}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Page;
