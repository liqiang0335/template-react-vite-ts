import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./style/index.css";

main();
async function main() {
  const root = document.getElementById("root") as HTMLElement;

  const token = localStorage.getItem('token');
  if (token) {
    window.token = token;

    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  } else {
    ReactDOM.createRoot(root).render(<App />);
  }
}
