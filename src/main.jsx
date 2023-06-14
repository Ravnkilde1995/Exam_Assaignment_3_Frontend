import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import App from "./App";
import apiFacade from "./apiFacade";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <App apiFacade={apiFacade} />

  </React.StrictMode>
);