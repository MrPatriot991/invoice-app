import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.ts";

import { ThemeProvider } from "@/provider/theme";
import { ModalProvider } from "@/provider/modal/";
import { ModalRoot } from "@/provider/modal";

import App from "./App.tsx";

import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <ModalProvider>
        <App />
        <ModalRoot />
      </ModalProvider>
    </ThemeProvider>
  </Provider>,
);
