import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './i18n';
import { LocaleProvider } from './contexts/LocaleContext'

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>
);
