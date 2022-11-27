import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { QuizProvider } from "./context/quizContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
