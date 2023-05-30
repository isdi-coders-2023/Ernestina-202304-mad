import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/app";
import { AppContextProvider } from "./context/app.context.provider";

ReactDOM.createRoot(document.querySelector(".root") as HTMLElement).render(
  <>
    <React.StrictMode>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </React.StrictMode>
  </>
);
