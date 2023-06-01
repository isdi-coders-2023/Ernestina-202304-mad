import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/app";
import { AppContextProvider } from "./context/app.context.provider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.querySelector(".root") as HTMLElement).render(
  <>
    <React.StrictMode>
      <Router>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </Router>
    </React.StrictMode>
  </>
);
