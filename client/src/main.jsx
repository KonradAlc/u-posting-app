import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import AppRouter from "./app/AppRouter";
import store from "./store";

import "./styles/reset.scss";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
