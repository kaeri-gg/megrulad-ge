import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import "./styles/section.css";
import "./styles/fonts.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
