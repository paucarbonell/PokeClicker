import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TeamProvider } from "./context/TeamContext";

createRoot(document.getElementById("root")).render(
  <TeamProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TeamProvider>
);
