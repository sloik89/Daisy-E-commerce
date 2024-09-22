import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" />
  </Provider>
);
