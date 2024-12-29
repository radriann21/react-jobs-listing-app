import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { JobsContextProvider } from "./context/JobsContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JobsContextProvider>
      <App />
    </JobsContextProvider>
  </StrictMode>
);
