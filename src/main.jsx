import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { registerSW } from "virtual:pwa-register";

registerSW();  // Registers the service worker

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
