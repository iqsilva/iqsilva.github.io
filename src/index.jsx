import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
