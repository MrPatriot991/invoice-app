import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/provider/theme";
import { ModalProvider } from "@/provider/modal/";

import App from "./App.tsx";

import "../styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ThemeProvider>,
);
