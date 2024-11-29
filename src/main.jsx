import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import  StoreProvider from "./contex/StoreContext.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    < StoreProvider>
      <App />
    </ StoreProvider>
  </BrowserRouter>
);