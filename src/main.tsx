import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme.ts";
import { WeatherProvider } from "./context/WeatherProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </ThemeProvider>
  </React.StrictMode>
);
