import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";
import "react-datepicker/dist/react-datepicker.css";

import App from "./components/App/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
