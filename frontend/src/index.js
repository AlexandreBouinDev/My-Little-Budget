import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { CardsStore } from "./stores";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={CardsStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
