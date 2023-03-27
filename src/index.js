import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const prepare = () => {
  if (process.env.NODE_ENV === "development") {
    // prevents the mock server from working in a deployed, production env
    const { worker } = require("./mocks/browser.js");
    return worker.start();
  }
  return Promise.resolve();
};

prepare().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
 
});
